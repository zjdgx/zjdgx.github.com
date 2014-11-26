package com.lenovo.lps.cloud.contact.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.HttpClientParams;
import org.apache.log4j.Logger;
import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.DeserializationConfig.Feature;
import org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion;

import com.lenovo.lps.cloud.common.constants.SystemConfig;

public final class HttpUtil {

	public static String doPost(String url, String body) {
		URL url1 = null;
		BufferedReader reader = null;
		PrintWriter writer = null;
		HttpURLConnection connection = null;
		try {
			url1 = new URL(url);
			connection = (HttpURLConnection) url1.openConnection();
			connection.setConnectTimeout(1000);
			connection.setReadTimeout(1000);
			connection.setRequestMethod("POST");
			connection.setInstanceFollowRedirects(true);
			connection.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 6.0)");
			connection.setDoInput(true);
			connection.setDoOutput(true);
			writer = new PrintWriter(connection.getOutputStream());
			writer.print(body);
			writer.flush();
			reader = new BufferedReader(new InputStreamReader(connection
					.getInputStream()));
			StringBuffer sb = new StringBuffer();
			String line;
			while ((line = reader.readLine()) != null) {
				sb.append(line).append("\n");
			}
			if(connection.getResponseCode()>=400){
				throw new IllegalStateException("对方返回失败的状态码:"+connection.getResponseCode());
			}
			return sb.toString();
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage(),e);
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e1) {
				}
			}
			if (writer != null) {
				writer.close();
			}
			if (connection != null)
				connection.disconnect();
		}
	}

	public static String doGet(String url) {
		URL url1 = null;
		BufferedReader reader = null;
		HttpURLConnection connection = null;
		try {
			url1 = new URL(url);
			connection = (HttpURLConnection) url1.openConnection();
			connection.setConnectTimeout(1000);
			connection.setReadTimeout(1000);
			connection.setRequestMethod("GET");
			connection.setInstanceFollowRedirects(true);
			connection.connect();
			reader = new BufferedReader(new InputStreamReader(connection
					.getInputStream()));
			StringBuffer sb = new StringBuffer();
			String line;
			while ((line = reader.readLine()) != null) {
				sb.append(line).append("\n");
			}
			if(connection.getResponseCode()>=400){
				throw new IllegalStateException("对方返回失败的状态码:"+connection.getResponseCode());
			}
			return sb.toString();
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage(),e);
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e1) {
				}
			}
			if (connection != null)
				connection.disconnect();
		}
	}
	
	/**
	 * 调用远程URL
	 * @param request
	 * @param url
	 * @param params
	 * @param cls
	 * @return
	 */
	public static <T> T getReturnObject(HttpServletRequest request, String url, Map<String, String> params, Class<T> cls){
		String json = get(request, url, params);
		if(json==null)return null;
		return getJson(json, cls);
	}
	
	public static String get(HttpServletRequest request, String url, Map<String, String> params) {
		GetMethod get = null;
		try{
			get = new GetMethod(url);
			
			if(request!=null)
				get.addRequestHeader("Cookie", request.getHeader("Cookie"));
			
			if(params!=null){
				List<NameValuePair> values = new ArrayList<NameValuePair>(params.size());
				for(Entry<String, String> en:params.entrySet()){
					values.add(new NameValuePair(en.getKey(), en.getValue()));
				}
				get.setQueryString(values.toArray(new NameValuePair[0]));
			}
			
			client.executeMethod(get);
			return get.getResponseBodyAsString();
		}catch(Exception e){
			if(logger.isDebugEnabled())
				logger.debug("获取"+url+"内容失败", e);
			return null;
		}finally{
			if(get!=null)
				get.releaseConnection();
		}
	}
	
	/**
	 * 判断是否成功
	 * @param res
	 * @return
	 */
	public static boolean isSuccess(HashMap<String, Object> res){
		if(res!=null){
			Integer r = (Integer)res.get("result");
			return r!=null && r==0;
		}
		return false;
	}
	
	/**
	 * 调用远程URL
	 * @param url
	 * @param params 参数
	 * @return 失败返回null
	 */
	public static <T> T postReturnObject(HttpServletRequest request, String url, Map<String, String> params, Class<T> cls){
		String json = post(request, url, params);
		if(json==null)return null;
		return getJson(json, cls);
	}
	
	public static String post(HttpServletRequest request, String url, Map<String, String> params){
		PostMethod post = null;
		try{
			post = new PostMethod(url);
			
			if(request!=null)
				post.addRequestHeader("Cookie", request.getHeader("Cookie"));
			
			if(params!=null){
				for(Entry<String, String> en:params.entrySet()){
					post.addParameter(en.getKey(), en.getValue());
				}
			}
			client.executeMethod(post);
			return post.getResponseBodyAsString();
		}catch(Exception e){
			if(logger.isDebugEnabled())
				logger.debug("获取"+url+"内容失败", e);
			return null;
		}finally{
			if(post!=null){
				post.releaseConnection();
			}
		}
	}
	
	@SuppressWarnings("deprecation")
	public static String postJson(HttpServletRequest request, String url, Map<String, String> params){
		PostMethod post = null;
		try{
			post = new PostMethod(url);
			
			if(request!=null)
				post.addRequestHeader("Cookie", request.getHeader("Cookie"));
			
			if(params!=null){
				JSONObject json = new JSONObject();
				for(Entry<String, String> en:params.entrySet()){
					json.put(en.getKey(), en.getValue());
				}
				
				post.setRequestBody(json.toString());
			}
			client.executeMethod(post);
			return post.getResponseBodyAsString();
		}catch(Exception e){
			if(logger.isDebugEnabled())
				logger.debug("获取"+url+"内容失败", e);
			return null;
		}finally{
			if(post!=null){
				post.releaseConnection();
			}
		}
	}
	
	/**
	 * 将数据转换为指定类型的对象
	 * @param <T>
	 * @param jsonStr
	 * @param cls
	 * @return
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	public static <T> T getJson(String jsonStr, Class<T> cls) {
		try{
			return objectMapper.readValue(jsonStr, cls);
		}catch(Exception e){
			if(logger.isDebugEnabled())
				logger.debug("解析json失败"+jsonStr, e);
			return null;
		}
	}
	
	protected static final Logger logger = Logger.getLogger(HttpUtil.class);
	/**
	 * json转换
	 */
	protected static ObjectMapper objectMapper = new ObjectMapper();
	/**
	 * HTTP请求客户端
	 */
	protected final static HttpClient client = new HttpClient();
	//设置HTTP编码
	static {
		//HttpClient配置
		client.setHttpConnectionManager(new MultiThreadedHttpConnectionManager());
		HttpClientParams params = new HttpClientParams();
		params.setConnectionManagerTimeout(1000*60);
		params.setSoTimeout(1000*60);
		params.setContentCharset("utf-8");
		
		List<Header> headers = new ArrayList<Header>();
        headers.add(new Header("Connection", "keep-alive"));
        headers.add(new Header("Accept", "text/html,application/xhtml+xml,application/xml;charset=UTF-8"));
        params.setParameter("http.default-headers", headers);
        
		client.setParams(params);
		
		String proxyHost = SystemConfig.getValue("httpclient.proxy.host");
		String proxyPort = SystemConfig.getValue("httpclient.proxy.port");
		if(proxyHost!=null && proxyPort!=null)
			client.getHostConfiguration().setProxy(proxyHost, Integer.valueOf(proxyPort));
		
		//JSON配置
		objectMapper.getJsonFactory().disable(JsonGenerator.Feature.AUTO_CLOSE_TARGET);
		objectMapper.getSerializationConfig().setSerializationInclusion(Inclusion.NON_NULL);
		objectMapper.getDeserializationConfig().disable(Feature.FAIL_ON_UNKNOWN_PROPERTIES);
	}
}

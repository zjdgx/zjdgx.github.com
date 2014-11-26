package com.lenovo.lps.cloud.common.util;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.entity.StringEntity;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.DefaultHttpRequestRetryHandler;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.params.CoreProtocolPNames;
import org.apache.http.protocol.HTTP;
import org.apache.log4j.Logger;

public class HttpClientUtil {
	private static Logger logger = Logger.getLogger( HttpClientUtil.class );

	private static final ThreadLocal<String> CONTENT_ENCODING = new ThreadLocal<String>();
	private static final ThreadLocal<String> ELEMENT_ENCODING = new ThreadLocal<String>();
	private static final ThreadLocal<Integer> REQUEST_TIMEROUT = new ThreadLocal<Integer>();//in milliseconds
	private static final ThreadLocal<Integer> REQUEST_RETRY_TIMES = new ThreadLocal<Integer>();

	private static final String DEFAULT_ENCODING="UTF-8";
	private static final String DEFAULT_TEXT_MIMETYPE="text/plain";
	private static final String DEFAULT_MIMETYPE="application/octet-stream";
	private static HttpHost proxy = null;
	private static Integer retryTimes = 0;

	public static HttpResponse upload( String url, List<UploadPart<?>> parts )
		throws ClientProtocolException, IOException{
		return upload( url, parts, null );
	}

	/**
	 * 以mulitpart方式进行POST上传请求.
	 * @param url
	 * @param parts
	 * @param headers
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public static HttpResponse upload( String url, List<UploadPart<?>> parts, List<String[]> headers )
		throws ClientProtocolException, IOException{
		
		HttpPost httppost = setHeadersAndParameters( new HttpPost(url), headers );

        MultipartEntity reqEntity = new MultipartEntity();

		if( parts != null ){
        	for( UploadPart<?> part : parts ){
        		addPart( reqEntity, part );
			}
		}

		httppost.setEntity(reqEntity);
		return createHttpClient().execute(httppost);
	}


	public static HttpResponse post( String url , List<String[]> parameters )
		throws ClientProtocolException, IOException{
		return post( url, parameters, null );
	}
	
	public static String postData(String url, String data, String cookie) throws ClientProtocolException, IOException{
		HttpPost httppost = setHeadersAndParameters( new HttpPost(url), null);
		if(cookie!=null)
			httppost.addHeader("Cookie", cookie);
		
		
		StringEntity entity =  new StringEntity(data);
		entity.setContentEncoding(getContentEncoding());
		httppost.setEntity(entity);
		
		HttpResponse resp = createHttpClient().execute(httppost);
		HttpEntity respEntity = resp.getEntity();
		if(respEntity!=null){
			InputStream in = null;
			try{
				in = respEntity.getContent();
				return StreamUtil.read(in);
			}finally{
				if(in!=null)
					in.close();
			}
		}
		return null;
	}


	/**
	 * form_url_encoding 形式进行POST请求
	 * @param url
	 * @param parameters
	 * @param headers
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public static HttpResponse post( String url, List<String[]> parameters, List<String[]> headers )
		throws ClientProtocolException, IOException{

		HttpPost httppost = setHeadersAndParameters( new HttpPost(url), headers );

		if ( parameters != null ){
			StringEntity entity =  new StringEntity( urlEncode( parameters ) ) ;
			String encoding = getContentEncoding();
			entity.setContentEncoding(encoding);
			entity.setContentType( URLEncodedUtils.CONTENT_TYPE + HTTP.CHARSET_PARAM + encoding );
			httppost.setEntity( entity );
		}

		return createHttpClient().execute(httppost);
	}

	public static  HttpResponse get( String url , List<String[]> parameters ) throws ClientProtocolException, IOException{
		return HttpClientUtil.get( url, parameters, null );
	}

	public static HttpResponse get( String url ) throws ClientProtocolException, IOException{
		return HttpClientUtil.get( url, null, null );
	}

	public static HttpResponse get( String url, List<String[]> parameters, List<String[]> headers )
		throws ClientProtocolException, IOException{

		if( parameters != null ){
			String queryString = urlEncode( parameters );
			if( queryString != null && queryString.length() > 0 && url != null ){
				int pos = url.lastIndexOf('?');
				url += ( pos > 0 ? '&' : pos < 0 ? '?' : "" ) + queryString;
			}
		}

		return createHttpClient().execute( setHeadersAndParameters( new HttpGet(url), headers ) );
	}

	public static void retryTimes( Integer times ){
		REQUEST_RETRY_TIMES.set( times );
	}

	public static void setRequestRetryTimes( Integer times ){
		retryTimes = times;
	}

	public static String getContentEncoding(){
		String encoding = CONTENT_ENCODING.get();
		return encoding == null ? DEFAULT_ENCODING : encoding;
	}

	public static String getElementEncoding(){
		String encoding = ELEMENT_ENCODING.get();
		return encoding == null ? DEFAULT_ENCODING : encoding;
	}

	public static void setContentEncoding(String encoding){
		CONTENT_ENCODING.set(encoding);
	}

	public static void setElementEncoding(String encoding){
		ELEMENT_ENCODING.set(encoding);
	}

	public static void setEncoding(String encoding){
		CONTENT_ENCODING.set(encoding);
		ELEMENT_ENCODING.set(encoding);
	}

	public static void setRequestTimeout(Integer timeout){
		REQUEST_TIMEROUT.set(timeout);
	}

	public static Integer getRequestTimeout(){
		return REQUEST_TIMEROUT.get();
	}

	public static void setProxy( String proxyServer, int proxyPort ){
		proxy = new HttpHost( proxyServer, proxyPort, "http" );
	}

	public static void setProxy( String proxyServer, int proxyPort, String protocol ){
		proxy = new HttpHost( proxyServer, proxyPort, protocol );
	}

	private static HttpClient createHttpClient(){
		DefaultHttpClient httpclient = new DefaultHttpClient();
		Integer timeout = getRequestTimeout();
		if( timeout != null )
			httpclient.getParams().setParameter( CoreConnectionPNames.CONNECTION_TIMEOUT, timeout );
		Integer retry = REQUEST_RETRY_TIMES.get();
		if( retry == null ){
			retry = retryTimes;
		}
		if( retry != null && retry.intValue() > 0 ){
			httpclient.setHttpRequestRetryHandler( new DefaultHttpRequestRetryHandler( retry, false ) );
		}
		
		return httpclient;
	}

	private static <T extends HttpRequestBase > T setHeadersAndParameters( T request, List<String[]> headers ){
		if ( headers != null ){
			for( String [] header : headers ){
				if( header.length == 2 && header[0] != null && header[1] != null )
					request.addHeader(header[0], header[1]);
			}
		}
		request.getParams().setParameter( CoreProtocolPNames.HTTP_ELEMENT_CHARSET, getElementEncoding() );
		if( proxy != null ){
			request.getParams().setParameter( ConnRoutePNames.DEFAULT_PROXY, proxy );
		}
		return request;
	}

	private static String urlEncode( List<String[]> parameters ) {

		StringBuilder sb = new StringBuilder();
		String encoding = getContentEncoding();

		for( String [] parameter : parameters ){

			if( parameter[0] != null && parameter[1] != null ){

				String name = parameter[0], value = parameter[1];

				try {
					name = URLEncoder.encode( name, encoding );
					value = URLEncoder.encode( value, encoding );
				} catch ( UnsupportedEncodingException e ) {
					if( logger.isDebugEnabled() ){
						logger.debug("UnsupportedEncodingException: encoding="+encoding );
					}
				}

				sb.append("&").append( name ).append( '=' ).append( value ); 
			}

		}

		if( sb.length() > 0 ) sb.delete(0, 1);

		return sb.toString();

	}

	private static void addPart( MultipartEntity reqEntity, UploadPart<?> part )
		throws IOException{

		String contentType = part.getContentType(),
				name = part.getName(), 
				defaultType = contentType == null ? DEFAULT_MIMETYPE : contentType;

		Object value = part.getValue();
		if( value instanceof File ){
	        reqEntity.addPart( name, new FileBody( (File) value, defaultType ) );
		} else if ( value instanceof InputStream ){
			byte [] content = StreamUtil.readBytes( ( InputStream ) value );
			ByteArrayBody bytes = new ByteArrayBody( content, defaultType, part.getFileName() );
	        reqEntity.addPart( name, bytes );
		} else{
			String [] typeAndCharset = parseTextContentType( contentType );
			String mimeType = typeAndCharset[0], charset = typeAndCharset[1];
			reqEntity.addPart( name, new StringBody( String.valueOf(value), mimeType, Charset.forName( charset ) ) );
		}

	}

	private static String [] parseTextContentType( String contentType ){
		String charset = getContentEncoding();
		if( contentType != null ){
			int p = contentType.indexOf("charset=");
			if( p > 0 ){
				int p2 = contentType.indexOf(";", p);
				charset = p2>0?contentType.substring( p + 8,p2 ) : contentType.substring( p + 8 );
			}else{
				contentType += "; charset="+charset;
			}
		}else{
			contentType = DEFAULT_TEXT_MIMETYPE+"; charset="+charset;
		}
		return new String[]{ contentType, charset };
	}

	public static class UploadPart<V>{
		private String name;
		private String contentType;
		private String fileName="nonamed";
		private V value;

		public UploadPart( String name , V v ){
			this.name = name;
			this.value = v;
		}
		public UploadPart( String name , V v, String fileName ){
			this.name = name;
			this.value = v;
			this.fileName = fileName;
		}
		public UploadPart( String name , V v, String fileName, String contentType){
			this.name = name;
			this.value = v;
			this.fileName = fileName;
			this.contentType = contentType;
		}

		public void setName( String name ){
			this.name = name;
		}
		public String getName(){
			return name;
		}
		public V getValue(){
			return value;
		}
		public void setValue( V v ){
			this.value = v;
		}
		public void setContentType( String contentType ){
			this.contentType = contentType;
		}
		public String getContentType(){
			return this.contentType;
		}
		public String getFileName() {
			return fileName;
		}
		public void setFileName(String fileName) {
			this.fileName = fileName;
		}
	}

	/**
	 * @param dialogueUrl
	 * @param params
	 * @param cookies
	 */
	public static String getContext(String url, List<String[]> params, String cookies) {
		if( params != null ){
			String queryString = urlEncode( params );
			if( queryString != null && queryString.length() > 0 && url != null ){
				int pos = url.lastIndexOf('?');
				url += ( pos > 0 ? '&' : pos < 0 ? '?' : "" ) + queryString;
			}
		}
		
		List<String[]> headers = null;
		if(cookies!=null){
			headers = new ArrayList<String[]>();
			headers.add(new String[]{"Cookie", cookies});
		}
		
		try {
			HttpResponse resp = createHttpClient().execute( setHeadersAndParameters( new HttpGet(url), headers ) );
			
			HttpEntity respEntity = resp.getEntity();
			if(respEntity!=null){
				InputStream in = null;
				try{
					in = respEntity.getContent();
					return StreamUtil.read(in);
				}finally{
					if(in!=null)
						in.close();
				}
			}
			return null;
		} catch (ClientProtocolException e) {
			e.printStackTrace();
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * @param url
	 * @param params
	 * @param cookies
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public static String postContext(String url, List<String[]> params, String cookies) throws UnsupportedEncodingException {
		List<String[]> headers = null;
		if(cookies!=null){
			headers = new ArrayList<String[]>();
			headers.add(new String[]{"Cookie", cookies});
		}
		
		HttpPost httppost = setHeadersAndParameters( new HttpPost(url), headers );

		if ( params != null ){
			StringEntity entity =  new StringEntity( urlEncode( params ) ) ;
			String encoding = getContentEncoding();
			entity.setContentEncoding(encoding);
			entity.setContentType( URLEncodedUtils.CONTENT_TYPE + HTTP.CHARSET_PARAM + encoding );
			httppost.setEntity( entity );
		}

		try {
			HttpResponse resp = createHttpClient().execute(httppost);
			
			HttpEntity respEntity = resp.getEntity();
			if(respEntity!=null){
				InputStream in = null;
				try{
					in = respEntity.getContent();
					return StreamUtil.read(in);
				}finally{
					if(in!=null)
						in.close();
				}
			}
			return null;
		} catch (ClientProtocolException e) {
			e.printStackTrace();
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}
 }

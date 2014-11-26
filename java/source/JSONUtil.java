package com.lenovo.lps.cloud.common.util;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.DeserializationConfig.Feature;
import org.codehaus.jackson.map.ObjectMapper;

import com.lenovo.lps.cloud.common.service.exception.DataConvertException;

/**
 * JSON格式数据转换工具类。
 * @author liyi
 */
public final class JSONUtil {
	private JSONUtil(){}

	private static Logger log = Logger.getLogger( JSONUtil.class );
	private static ObjectMapper mapper = new ObjectMapper();
	
	static {
		mapper.configure(Feature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	}
	
	public static <T> T parseJSONString( String jsonString, Class<T> valueClass ) throws DataConvertException {
		
		try {
			return mapper.readValue( jsonString, valueClass );
		} catch ( Exception e ) {
			if( log.isDebugEnabled() )
				log.debug( "parse JSONString to JavaObject error。JSONString = " + jsonString, e );
			throw new DataConvertException( "parse JSONString to JavaObject error", e );
		}

	}

	public static String toJSONString( Object bean ) throws DataConvertException {

		try {
			return mapper.writeValueAsString( bean );
		} catch ( Exception e ) {
			if( log.isDebugEnabled() )
				log.debug( "convert JavaObject to JSONString  error。JavaObject = " + bean, e );
			throw new DataConvertException( "convert JavaObject to JSONString error", e );
		}

	}

}

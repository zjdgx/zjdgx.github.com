package com.lenovo.lps.cloud.sms.web.utils;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
public class GzipUtil {
    public static byte[] gzip(byte[] in){
        ByteArrayOutputStream baos = new ByteArrayOutputStream(1024);
        try {
            GZIPOutputStream gos = new GZIPOutputStream(baos);
            gos.write(in);
            gos.finish();
            gos.flush();
        } catch (IOException e) {
            throw new RuntimeException("gzip发生错误",e);
        }
        return baos.toByteArray();
    }
    
    public static byte[] ungzip(byte[] in){
        ByteArrayOutputStream baos = new ByteArrayOutputStream(1024);
        try {
            GZIPInputStream gis = new GZIPInputStream(new ByteArrayInputStream(in));
            int p;
            byte[] buf = new byte[1024];
            while((p=gis.read(buf))!=-1){
                baos.write(buf,0,p);
            }
            baos.flush();
        } catch (IOException e) {
            throw new RuntimeException("gzip发生错误",e);
        }
        return baos.toByteArray();
    }
}

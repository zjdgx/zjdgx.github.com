package creazy.chap3.section3_2;

import android.app.Activity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import com.example.creazy.R;

import creazy.event.listener.SendSmsListener;

/**
 * 疯狂Android讲义:
 *  3.2.4 外部类作为事件监听器类(P166)
 *   实例: 发送短信
 * 
 * @author zjdgx
 * @since 2014-04-28
 */
public class P166_SmsSendListener extends Activity {
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p166_event_listener_main);
		EditText address = (EditText)findViewById(R.id.p166_address);
		EditText content = (EditText)findViewById(R.id.p166_content);
		Button send = (Button)findViewById(R.id.p166_sendsms);
		send.setOnLongClickListener(new SendSmsListener(this, address, content));
	}
}
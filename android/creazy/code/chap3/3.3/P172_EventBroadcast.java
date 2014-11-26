package creazy.chap3.section3_3;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.View.OnKeyListener;
import android.widget.Button;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  3.3.2 基于回调的事件传播(P172)
 *   实例: 事件传播测试
 * 
 * @author zjdgx
 * @since 2014-04-28
 */
public class P172_EventBroadcast extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p172_event_broadcast_main);

		Button btn = (Button) findViewById(R.id.p172_event_broadcast_btn);

		btn.setOnKeyListener(new OnKeyListener() {

			@Override
			public boolean onKey(View v, int keyCode, KeyEvent event) {
				if (event.getAction() == KeyEvent.ACTION_DOWN) {
					Log.v("---p172_EventBroadcast---",
							"key down in anonymous listener...");
				} else if( event.getAction() == KeyEvent.ACTION_UP) {
					Log.v("---p172_EventBroadcast---",
							"key up in anonymous listener...");
				}
				return false;
			}
		});
	}
	
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		super.onKeyDown(keyCode, event);
		Log.v("---p172_EventBroadcast---",
				"key down in activity listener...");
		return false;
	}
	@Override
	public boolean onKeyUp(int keyCode, KeyEvent event) {
		super.onKeyDown(keyCode, event);
		Log.v("---p172_EventBroadcast---",
				"key up in activity listener...");
		return false;
	}
}
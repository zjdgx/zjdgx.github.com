package creazy.chap3.section3_2;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  3.2.1 事件监听的处理模型(P159)
 *   实例: EventListenerQs
 * 
 * @author zjdgx
 * @since 2014-04-25
 */
public class P161_EventListenerQsActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p161_event_listener_main);
		
		Button btn = (Button)findViewById(R.id.p161_event_btn);
		btn.setOnClickListener(new ZjdgxClickListener());
	}
	
	class ZjdgxClickListener implements View.OnClickListener {
		@Override
		public void onClick(View v) {
			EditText txt = (EditText)findViewById(R.id.p161_event_edit);
			txt.setText("事件监听测试...");
		}
	}
}
package creazy.chap2.section2_6;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.6.2 Notification的功能与用法(P143)
 *   实例: Notification的发送与取消
 * 
 * @author zjdgx
 * @since 2014-04-23
 */
public class P144_NotificationActivity extends Activity {

	static final int NOTIFICATION_ID = 0x132;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p144_notification_main);

		final NotificationManager manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

		Button showNotification = (Button) findViewById(R.id.p144_show_notification);

		showNotification.setOnClickListener(new OnClickListener() {
			@SuppressWarnings("deprecation")
			@Override
			public void onClick(View v) {
				System.out.println("-------------------notification start --------------------------");
				Intent intent = new Intent(P144_NotificationActivity.this, P144_OtherActivity.class);
				PendingIntent pi = PendingIntent.getActivity(P144_NotificationActivity.this, 0, intent, 0);
				
				Notification notification = new Notification();
				notification.icon = R.drawable.zjdgx;
				notification.tickerText = "zjdgx notification text...";
				notification.when = System.currentTimeMillis();
				notification.defaults = Notification.DEFAULT_SOUND;
				
				notification.setLatestEventInfo(P144_NotificationActivity.this, "点击查看", "点击查看详细内容",pi);
				
				manager.notify(NOTIFICATION_ID, notification);
			}
		});

		Button hideNotification = (Button) findViewById(R.id.p144_hide_notification);

		hideNotification.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				manager.cancel(NOTIFICATION_ID);
			}
		});

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
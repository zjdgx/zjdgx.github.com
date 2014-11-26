package creazy.chap6.section6_4;

import java.util.Timer;
import java.util.TimerTask;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.drawable.ClipDrawable;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.widget.ImageView;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  6.4.5 ClipDrawable资源(P245)
 *   实例: 徐徐展开的风景
 * 
 * @author zjdgx
 * @since 2014-05-14
 */
public class P246_ClipDrawableActivity extends Activity {
	@SuppressLint("HandlerLeak")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p246_clip_drawable_activity_main);

		ImageView img = (ImageView) findViewById(R.id.p246_clip_drawable_image);
		final ClipDrawable clip = (ClipDrawable) img.getDrawable();
		if( clip == null ) {
			Log.d("===crazy===","===错误clip===");
			return;
		}
		final Handler handler = new Handler() {
			@Override
			public void handleMessage(Message msg) {
				super.handleMessage(msg);
				if (msg.what == 0x999) {
					clip.setLevel(clip.getLevel() + 200);
				}
			}
		};
		final Timer timer = new Timer();
		timer.schedule(new TimerTask() {

			@Override
			public void run() {
				Message msg = new Message();
				msg.what = 0x999;
				handler.sendMessage(msg);
				if (clip.getLevel() >= 10000) {
					timer.cancel();
				}
			}
		}, 0, 300);
	}
}
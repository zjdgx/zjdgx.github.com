package creazy.chap3.section3_4;

import android.app.Activity;
import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  3.4.1 Configuration类简介(P176)
 *   实例: 获取系统设备状态
 * 
 * @author zjdgx
 * @since 2014-04-29
 */
public class P177_ConfigurationTest extends Activity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p177_configuration_main);
		LinearLayout layout = (LinearLayout) findViewById(R.id.p177_configureation_layout);
		Configuration cfg = getResources().getConfiguration();
		// Orientation
		TextView ori = new TextView(this);
		ori.setText(cfg.orientation == Configuration.ORIENTATION_LANDSCAPE ? "横向屏幕"
				: "竖向屏幕");
		layout.addView(ori);
		// navigation
		TextView navigation = new TextView(this);
		navigation
				.setText(cfg.navigation == Configuration.NAVIGATION_NONAV ? "没有方向控制"
						: cfg.navigation == Configuration.NAVIGATION_WHEEL ? "滚轮控制方向"
								: cfg.navigation == Configuration.NAVIGATION_DPAD ? "方向键控制方向"
										: "轨迹球控制方向");
		layout.addView(navigation);
		// touch
		TextView touch = new TextView(this);
		touch.setText(cfg.touchscreen == Configuration.TOUCHSCREEN_NOTOUCH ? "无触摸屏"
				: cfg.touchscreen == Configuration.TOUCHSCREEN_FINGER ? "接受手指的触摸屏"
						: "触摸笔式触摸屏");
		layout.addView(touch);
		// mnc
		TextView mnc = new TextView(this);
		mnc.setText(cfg.mnc+"");
		layout.addView(mnc);
	}
}
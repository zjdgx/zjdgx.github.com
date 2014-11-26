package creazy.chap3.section3_4;

import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.Toast;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  3.4.2 重写onConfigurationChanged响应系统设置更改(P178)
 *   实例: 动态改变系统设置
 * 
 * @author zjdgx
 * @since 2014-04-29
 */
public class P178_ConfigurationChangeTest extends Activity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p178_configuration_change_main);
		Button btn = (Button) findViewById(R.id.p178_configuration_change_btn);

		btn.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				Configuration cfg = getResources().getConfiguration();
				cfg.orientation = (cfg.orientation == Configuration.ORIENTATION_LANDSCAPE ? Configuration.ORIENTATION_PORTRAIT
						: Configuration.ORIENTATION_LANDSCAPE);
				if (cfg.orientation == Configuration.ORIENTATION_LANDSCAPE) {// 设置为竖屏
					P178_ConfigurationChangeTest.this
							.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
				} else {// 设置为横屏
					P178_ConfigurationChangeTest.this
							.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
				}

			}
		});
	}

	@Override
	public void onConfigurationChanged(Configuration config) {
		super.onConfigurationChanged(config);
		String screen = config.orientation == Configuration.ORIENTATION_LANDSCAPE ? "横向屏幕"
				: "竖向屏幕";
		Toast.makeText(this, "系统的屏幕方向发生改变, 修改后的屏幕方向为: " + screen,
				Toast.LENGTH_LONG).show();
	}
}
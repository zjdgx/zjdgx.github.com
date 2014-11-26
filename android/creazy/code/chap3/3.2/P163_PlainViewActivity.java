package creazy.chap3.section3_2;

import android.app.Activity;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.KeyEvent;
import android.view.View;
import android.view.View.OnKeyListener;
import android.view.Window;
import android.view.WindowManager;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  3.2.2 事件和事件监听器(P161)
 *   实例: 控制飞机移动
 * 
 * @author zjdgx
 * @since 2014-04-25
 */
public class P163_PlainViewActivity extends Activity {

	// 定义飞机的移动速度
	private int speed = 12;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// 去掉窗口标题
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		// 全屏显示
		getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
		// 创建P163_PlaneView组件
		final P163_PlaneView view = new P163_PlaneView(this);
		setContentView(view);
		view.setBackgroundResource(R.drawable.p163_back);
		// 获取窗口管理器
		WindowManager windowManager = getWindowManager();
		Display display = windowManager.getDefaultDisplay();
		DisplayMetrics dm = new DisplayMetrics();
		// 获得屏幕宽和高
		display.getMetrics(dm);
		int screenWidth = dm.widthPixels;
		int screenHeight = dm.heightPixels;
		// 设置飞机的初始位置
		view.currentX = screenWidth / 2;
		view.currentY = screenHeight - 40;
		// 为draw组件键盘事件绑定监听器
		view.setOnKeyListener(new OnKeyListener() {
			@Override
			public boolean onKey(View v, int keyCode, KeyEvent event) {
				System.out.println(event.getKeyCode());
				// 获取由哪个键触发的事件
				switch(event.getKeyCode()) {
				
				case KeyEvent.KEYCODE_DPAD_DOWN:
					view.currentY += speed;
					break;
				case KeyEvent.KEYCODE_DPAD_UP:
					view.currentY -= speed;
					break;
				case KeyEvent.KEYCODE_DPAD_LEFT:
					view.currentX -= speed;
					break;
				case KeyEvent.KEYCODE_DPAD_RIGHT:
					view.currentX += speed;
					break;
				}
				// 通知planeView组件重绘
				view.invalidate();
				return true;// false对结果有没有影响?
			}
		});
		
	}
}
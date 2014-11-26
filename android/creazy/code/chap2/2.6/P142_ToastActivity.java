package creazy.chap2.section2_6;

import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.6.1 使用Toast显示提示信息框(P142)
 *   实例: 带图片的消息提示
 * 
 * @author zjdgx
 * @since 2014-04-23
 */
public class P142_ToastActivity extends Activity {
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p142_toast_main);

		Button showToastBtn = (Button) findViewById(R.id.p142_toast_btn);
		
		showToastBtn.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				Toast toast = Toast.makeText(P142_ToastActivity.this, "普通Toast提示信息", Toast.LENGTH_LONG);
				toast.setText("Toast测试");
				toast.setDuration(2);
				toast.setGravity(Gravity.CENTER_VERTICAL, 0, 0);
				toast.show();
			}
		});
		
		Button imgToast = (Button)findViewById(R.id.p142_toast_img_btn);
		
		imgToast.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				Toast toast = Toast.makeText(P142_ToastActivity.this, "带图片的Toast提示信息", Toast.LENGTH_SHORT);
				toast.setGravity(Gravity.CENTER, 0, 0);
				// 获得Toast提示里原有的View
				View view = toast.getView();
				// 创建一个ImageView
				ImageView image = new ImageView(P142_ToastActivity.this);
				image.setImageResource(R.drawable.p142_tools);
				LinearLayout layout = new LinearLayout(P142_ToastActivity.this);
				layout.addView(image);
				layout.addView(view);
				toast.setView(layout);
				toast.show();
			}
		});

	}
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
package creazy.chap2.section2_5;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.5.1 使用AlertDialog创建简单对话框(P124)
 *   实例: 显示提示消息的对话框
 * 
 * @author zjdgx
 * @since 2014-04-18
 */
public class P125_AlertDialogActivity extends Activity {


	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p125_alert_dialog_main);
		Button btn = (Button)findViewById(R.id.btn);
		// 定义一个AlertDialog.Builder对象
		final Builder builder = new AlertDialog.Builder(this);
		btn.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				// 设置对话框的图标
				builder.setIcon(R.drawable.p110_red);
				// 设置对话框的标题
				builder.setTitle("自定义普通对话框");
				// 设置对话框显示的内容
				builder.setMessage("简单的演示对话框");
				// 为对话框设置一个"确定"按钮
				builder.setPositiveButton("确定", new DialogInterface.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialog, int which) {
						EditText show = (EditText)findViewById(R.id.showTime);
						show.setText("用户单击了\"确定\"按钮");
					}
				});
				builder.setNegativeButton("取消", new DialogInterface.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialog, int which) {
						EditText show = (EditText)findViewById(R.id.showTime);
						show.setText("用户单击了\"取消\"按钮");
					}
				});
				builder.create().show();
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
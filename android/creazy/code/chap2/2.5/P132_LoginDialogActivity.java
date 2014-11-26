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
import android.widget.TableLayout;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.5.3 使用AlertDialog创建自定义对话框(P131)
 *   实例: 登录对话框
 * 
 * @author zjdgx
 * @since 2014-04-21
 */
public class P132_LoginDialogActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p132_login_main_dialog_main);
		Button btn = (Button) findViewById(R.id.p132_btn);
		final Builder builder = new AlertDialog.Builder(this);
		btn.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				// 设置对话框的图标
				builder.setIcon(R.drawable.p110_red);
				// 设置对话框的标题
				builder.setTitle("单选列表对话框");
				TableLayout loginForm = (TableLayout) getLayoutInflater()
						.inflate(R.layout.p132_login_dialog_main, null);
				// 设置对话框显示的view对象
				builder.setView(loginForm);
				builder.setPositiveButton("登录",
						new DialogInterface.OnClickListener() {
							@Override
							public void onClick(DialogInterface dialog,
									int which) {
								// TODO:处理登录
							}
						});
				builder.setNegativeButton("取消",
						new DialogInterface.OnClickListener() {
							@Override
							public void onClick(DialogInterface dialog,
									int which) {
								// TODO:取消登录
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
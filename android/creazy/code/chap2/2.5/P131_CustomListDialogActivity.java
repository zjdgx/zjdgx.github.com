package creazy.chap2.section2_5;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.5.3 使用AlertDialog创建自定义对话框(P131)
 *   实例: 使用AlertDialog创建自定义列表对话框
 * 
 * @author zjdgx
 * @since 2014-04-21
 */
public class P131_CustomListDialogActivity extends Activity {

	final int LIST_DIALOG = 0x113;
	// 定义三个列表项的名称
	final String[] names = new String[] { "神族", "虫族", "人族" };
	// 定义三个列表项对应的图标
	private int[] imageIds = new int[] { R.drawable.p131_p, R.drawable.p131_z,
			R.drawable.p131_t };

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p131_custom_list_dialog_main);
		Button btn = (Button) findViewById(R.id.btn);
		final Builder builder = new AlertDialog.Builder(this);
		btn.setOnClickListener(new OnClickListener() {

			@SuppressWarnings("deprecation")
			@Override
			public void onClick(View v) {
				showDialog(LIST_DIALOG);
			}
		});
		builder.create().show();
	}

	@Override
	public Dialog onCreateDialog(int id, Bundle state) {
		// 判断需要生成那种类型的对话框
		switch (id) {
		case LIST_DIALOG:
			Builder builder = new AlertDialog.Builder(this);
			// 设置对话框的图标
			builder.setIcon(R.drawable.p110_red);
			// 设置对话框的标题
			builder.setTitle("单选列表对话框");
			List<Map<String, Object>> listItems = new ArrayList<Map<String, Object>>();
			for (int i = 0; i < names.length; i++) {
				Map<String, Object> item = new HashMap<String, Object>();
				item.put("img", imageIds[i]);
				item.put("name", names[i]);
				listItems.add(item);
			}
			// 创建一个SimpleAdapter
			SimpleAdapter adapter = new SimpleAdapter(this, listItems,
					R.layout.p131_cell, new String[] { "name", "img" },
					new int[] { R.id.personName, R.id.personHeader });
			// 为对话框设置多个列表
			builder.setAdapter(adapter, new DialogInterface.OnClickListener() {

				@Override
				public void onClick(DialogInterface dialog, int which) {
					TextView text = (TextView) findViewById(R.id.customDialog);
					text.setText("你擅长的种族是:" + names[which]);
				}
			});
			return builder.create();
		}
		return null;
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
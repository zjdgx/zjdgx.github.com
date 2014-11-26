package creazy.chap2.section2_7;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.ContextMenu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.7.5 上下文菜单(P155)
 *   实例: CotnextMenu
 * 
 * @author zjdgx
 * @since 2014-04-24
 */
public class P156_ContextMenuActivity extends Activity {

	// 为每个菜单定义一个标识
	final int MENU1 = 0x111;
	final int MENU2 = 0x112;
	final int MENU3 = 0x113;

	private TextView view;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p156_context_menu_main);
		view = (TextView) findViewById(R.id.p156_text_view);
		registerForContextMenu(view);
	}

	// 每次创建上下文菜单时都会触发
	@Override
	public void onCreateContextMenu(ContextMenu menu, View source,
			ContextMenu.ContextMenuInfo menuInfo) {
		menu.add(0, MENU1, 0, "红色");
		menu.add(0, MENU2, 0, "绿色");
		menu.add(0, MENU3, 0, "蓝色");
		// 将三个菜单项设为单选菜单项
		menu.setGroupCheckable(0, true, true);
		// 设置上下文菜单的标题、图标
		menu.setHeaderIcon(R.drawable.p142_tools);
		menu.setHeaderTitle("选择背景色");
	}

	// 菜单项单击时触发
	@Override
	public boolean onContextItemSelected(MenuItem item) {
		switch(item.getItemId()) {
		case MENU1:
			item.setChecked(true);
			view.setBackgroundColor(Color.RED);
			break;
		case MENU2:
			item.setChecked(true);
			view.setBackgroundColor(Color.GREEN);
			break;
		case MENU3:
			item.setChecked(true);
			view.setBackgroundColor(Color.BLUE);
			break;
		}
		return super.onContextItemSelected(item);
	}
}
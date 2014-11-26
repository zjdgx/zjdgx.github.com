package creazy.chap2.section2_7;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SubMenu;
import android.widget.EditText;
import android.widget.Toast;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.6.2 Notification的功能与用法(P143)
 *   实例: Notification的发送与取消
 * 
 * @author zjdgx
 * @since 2014-04-23
 */
public class P147_MenuActivity extends Activity {
	
	// 定义字体大小菜单项的标识
	final int FONT_10 = 0x111;
	final int FONT_12 = 0x112;
	final int FONT_14 = 0x113;
	final int FONT_16 = 0x114;
	final int FONT_18 = 0x115;
	
	// 定义普通菜单项的标识
	final int PLAIN_ITEM = 0x11b;
	
	// 定义字体颜色菜单项的标识
	final int FONT_RED = 0x116;
	final int FONT_BLUE = 0x117;
	final int FONT_GREEN = 0x118;
	
	private EditText edit;
	

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p147_menu_main);
		
		edit = (EditText)findViewById(R.id.p147_menu_edit);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// ------------------- 向menu中添加字体大小的子菜单 -------------------
		SubMenu fontMenu = menu.addSubMenu("字体大小");
		// 设置菜单的头像
		fontMenu.setIcon(R.drawable.p147_font_icon);
		// 设置菜单头的图标
		fontMenu.setHeaderIcon(R.drawable.p147_font_icon);
		// 设置菜单头的标题
		fontMenu.setHeaderTitle("选择字体大小");
		fontMenu.add(0, FONT_10, 0, "10号字体");
		fontMenu.add(0, FONT_12, 0, "12号字体");
		fontMenu.add(0, FONT_14, 0, "14号字体");
		fontMenu.add(0, FONT_16, 0, "16号字体");
		fontMenu.add(0, FONT_18, 0, "18号字体");
		// ------------------- 向menu中添加普通菜单项 -------------------
		menu.add(0, PLAIN_ITEM, 0, "普通菜单项");
		// ------------------- 向menu中添加文字颜色的子菜单 -------------------
		SubMenu colorMenu = menu.addSubMenu("字体颜色");
		// 设置菜单的头像
		colorMenu.setIcon(R.drawable.p147_font_icon);
		// 设置菜单头的图标
		colorMenu.setHeaderIcon(R.drawable.p147_font_icon);
		// 设置菜单头的标题
		colorMenu.setHeaderTitle("选择字体颜色");
		colorMenu.add(0, FONT_RED, 0, "红色");
		colorMenu.add(0, FONT_BLUE, 0, "蓝色");
		colorMenu.add(0, FONT_GREEN, 0, "绿色");
		return super.onCreateOptionsMenu(menu);
	}
	
	@Override
	public boolean onOptionsItemSelected(MenuItem mi) {
		edit.setText("选项点击了...");
		switch(mi.getItemId()) {
		case FONT_10:
			edit.setTextSize(10*2);
			break;
		case FONT_12:
			edit.setTextSize(12*2);
			break;
		case FONT_14:
			edit.setTextSize(14*2);
			break;
		case FONT_16:
			edit.setTextSize(16*2);
			break;
		case FONT_18:
			edit.setTextSize(18*2);
			break;
		case FONT_RED:
			edit.setTextColor(Color.RED);
			break;
		case FONT_BLUE:
			edit.setTextColor(Color.BLUE);
			break;
		case FONT_GREEN:
			edit.setTextColor(Color.GREEN);
			break;
		case PLAIN_ITEM:
			Toast toast = Toast.makeText(P147_MenuActivity.this, "单击了普通菜单项", Toast.LENGTH_LONG);
			toast.show();
			break;	
		}
		return true;
	}

}
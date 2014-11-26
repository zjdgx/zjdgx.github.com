package creazy.chap2.section2_7;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SubMenu;
import android.widget.EditText;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.7.3 创建复选菜单项和单选菜单项(P152)
 *   实例: CheckableMenu
 * 
 * @author zjdgx
 * @since 2014-04-23
 */
public class P152_CheckableMenuActivity extends Activity {
	
	// 定义性别菜单项的标识
	final int MALE = 0x111;
	final int FEMALE =0x112;
	
	// 定义字体颜色菜单项的标识
	final int RED = 0x113;
	final int BLUE = 0x114;
	final int GREEN = 0x115;
	
	// 定义三个菜单项
	MenuItem[] items = new MenuItem[3];
	String[] colorNames = new String[]{"红色","蓝色","绿色"};
		
	private EditText edit;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p152_checkable_menu_main);
		
		edit = (EditText)findViewById(R.id.p152_edit_text);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// ------------------- 向menu中添加性别的子菜单 -------------------
		SubMenu sexMenu = menu.addSubMenu("您的性别");
		sexMenu.setIcon(R.drawable.p152_gender);
		sexMenu.setHeaderIcon(R.drawable.p152_gender);
		sexMenu.setHeaderTitle("选择您的性别");
		sexMenu.add(0,MALE,0,"男性");
		sexMenu.add(0,FEMALE,0,"女性");
		// 设置sexMenu菜单内0组菜单项为单选菜单项
		sexMenu.setGroupCheckable(0, true, true);
		
		// ------------------- 向menu中添加文字颜色的子菜单 -------------------
		SubMenu colorMenu = menu.addSubMenu("字体颜色");
		// 设置菜单的头像
		colorMenu.setIcon(R.drawable.p147_font_icon);
		// 设置菜单头的图标
		colorMenu.setHeaderIcon(R.drawable.p147_font_icon);
		// 设置菜单头的标题
		colorMenu.setHeaderTitle("选择字体颜色");
		items[0] = colorMenu.add(0, RED, 0, "红色").setCheckable(true);
		items[1] = colorMenu.add(0, BLUE, 0, "蓝色").setCheckable(true);
		items[2] = colorMenu.add(0, GREEN, 0, "绿色").setCheckable(true);
		// 设置快捷键
		items[2].setAlphabeticShortcut('u');
		return super.onCreateOptionsMenu(menu);
	}
	
	@Override
	public boolean onOptionsItemSelected(MenuItem mi) {
		switch(mi.getItemId()) {
		case MALE:
			edit.setText("您的性别为男");
			mi.setChecked(true);
			break;
		case FEMALE:
			edit.setText("您的性别为女");
			mi.setChecked(true);
			break;
		case RED:
		case BLUE:
		case GREEN:
			if(mi.isChecked()) {
				mi.setChecked(false);
			} else {
				mi.setChecked(true);
			}
			showColor();
			break;
		}
		return true;
	}
	
	public void showColor(){
		String result = "您喜欢的颜色有:";
		for(int i=0; i<items.length; i++) {
			if(items[i].isChecked()) {
				result += items[i].getTitle()+",";
			}
		}
		edit.setText(result.substring(0, result.length()-1));
	}
}
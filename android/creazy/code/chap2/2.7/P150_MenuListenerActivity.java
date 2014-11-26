package creazy.chap2.section2_7;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SubMenu;
import android.widget.TextView;
import android.widget.Toast;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  2.7.2 使用监听器来监听菜单事件(P150)
 *   实例: MenuListener
 * 
 * @author zjdgx
 * @since 2014-04-23
 */
public class P150_MenuListenerActivity extends Activity {
	
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
	
	private TextView edit;
	

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p150_menu_listener_main);
		
		edit = (TextView)findViewById(R.id.p150_textView);
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
		MenuItem font10 = fontMenu.add(0, FONT_10, 0, "10号字体");
		MenuItem font12 = fontMenu.add(0, FONT_12, 0, "12号字体");
		MenuItem font14 = fontMenu.add(0, FONT_14, 0, "14号字体");
		MenuItem font16 = fontMenu.add(0, FONT_16, 0, "16号字体");
		MenuItem font18 = fontMenu.add(0, FONT_18, 0, "18号字体");
		font10.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextSize(10 * 2);
				return false;
			}
		});
		font12.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextSize(12 * 2);
				return false;
			}
		});
		font14.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextSize(14 * 2);
				return false;
			}
		});
		font16.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextSize(16 * 2);
				return false;
			}
		});
		font18.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextSize(18 * 2);
				return false;
			}
		});
		// ------------------- 向menu中添加普通菜单项 -------------------
		MenuItem plain = menu.add(0, PLAIN_ITEM, 0, "普通菜单项");
		plain.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				Toast toast = Toast.makeText(P150_MenuListenerActivity.this, "单击了普通菜单项", Toast.LENGTH_SHORT);
				toast.show();
				return false;
			}
		});
		// ------------------- 向menu中添加文字颜色的子菜单 -------------------
		SubMenu colorMenu = menu.addSubMenu("字体颜色");
		// 设置菜单的头像
		colorMenu.setIcon(R.drawable.p147_font_icon);
		// 设置菜单头的图标
		colorMenu.setHeaderIcon(R.drawable.p147_font_icon);
		// 设置菜单头的标题
		colorMenu.setHeaderTitle("选择字体颜色");
		MenuItem colorRed = colorMenu.add(0, FONT_RED, 0, "红色");
		MenuItem colorBlue = colorMenu.add(0, FONT_BLUE, 0, "蓝色");
		MenuItem colorGreen = colorMenu.add(0, FONT_GREEN, 0, "绿色");
		colorRed.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextColor(Color.RED);
				return false;
			}
		});
		colorBlue.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextColor(Color.BLUE);
				return false;
			}
		});
		colorGreen.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
			@Override
			public boolean onMenuItemClick(MenuItem item) {
				edit.setTextColor(Color.GREEN);
				return false;
			}
		});
		return super.onCreateOptionsMenu(menu);
	}
}
package creazy.chap2.section2_7;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SubMenu;

import com.example.creazy.R;

import creazy.chap2.section2_6.P144_OtherActivity;

/**
 * 疯狂Android讲义:
 *  2.7.4 设置与菜单项关联的Activity(P154)
 *   实例: ActivityMenu
 * 
 * @author zjdgx
 * @since 2014-04-24
 */
public class P154_ActivityMenuActivity extends Activity {
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	}
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// ------------------- 向menu中添加子菜单
		SubMenu prog = menu.addSubMenu("启动程序");
		prog.setIcon(R.drawable.p142_tools);
		prog.setHeaderIcon(R.drawable.p142_tools);
		prog.setHeaderTitle("选择你要启动的程序:");
		MenuItem mi = prog.add("查看经典Java EE");
		mi.setIntent(new Intent(this, P144_OtherActivity.class));
		return super.onCreateOptionsMenu(menu);
	}
}
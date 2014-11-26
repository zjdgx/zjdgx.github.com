package com.example.creazy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.widget.AbsListView.LayoutParams;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.GridView;
import android.widget.ImageSwitcher;
import android.widget.ImageView;
import android.widget.SimpleAdapter;
import android.widget.ViewSwitcher.ViewFactory;

/**
 * 疯狂Android讲义:
 *  2.4.11 网格视图(GridView)和图像切换器(ImageSwitcher)的功能和用法(P118)
 *   实例: 带预览的图片浏览器
 * 
 * @author zjdgx
 * @since 2014-04-17
 */
public class P119_GridViewActivity extends Activity {

	int[] imageIds = new int[] {
			R.drawable.p119_bomb5,R.drawable.p119_bomb6,R.drawable.p119_bomb7,
			R.drawable.p119_bomb8,R.drawable.p119_bomb9,R.drawable.p119_bomb10,
			R.drawable.p119_bomb11,R.drawable.p119_bomb12,R.drawable.p119_bomb13,
			R.drawable.p119_bomb14,R.drawable.p119_bomb15,R.drawable.p119_bomb16,
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p119_gridview_imageswitcher_activity_main);
		// 创建一个List集合
		List<Map<String, Object>> listItems = new ArrayList<Map<String, Object>>();
		for (int i = 0; i < imageIds.length; i++) {
			Map<String, Object> item = new HashMap<String, Object>();
			item.put("image", imageIds[i]);
			listItems.add(item);
		}
		// 获取显示图片的ImageSwitcher
		final ImageSwitcher switcher = (ImageSwitcher) findViewById(R.id.switcher);
		// 设置图片显示的动画效果
		switcher.setInAnimation(AnimationUtils.loadAnimation(this,
				android.R.anim.fade_in));
		switcher.setOutAnimation(AnimationUtils.loadAnimation(this,
				android.R.anim.fade_out));
		// 为ImageSwitcher设置图片切换的动画效果
		/*switcher.setFactory(new ViewFactory() {
			@Override
			public View makeView() {
				ImageView imageView = new ImageView(P119_GridViewActivity.this);
				imageView.setBackgroundColor(0xff0000);
				imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
				imageView.setLayoutParams(new ImageSwitcher.LayoutParams(
						LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
				return imageView;
			}
		});*/
		
		//创建一个SimpleAdapter
		SimpleAdapter adapter = new SimpleAdapter(this, listItems, R.layout.p119_cell, new String[]{"image"}, new int[]{R.id.image1});
		GridView gView = (GridView)findViewById(R.id.gridview);
		gView.setAdapter(adapter);
		gView.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> parent, View view,
					int position, long id) {
				switcher.setImageResource(imageIds[position%imageIds.length]);
			}

			@Override
			public void onNothingSelected(AdapterView<?> arg0) {}
			
		});
		/*gView.setOnItemClickListener(new OnItemClickListener() {

			@Override
			public void onItemClick(AdapterView<?> parent, View view, int position,
					long id) {
				// 显示被点击的图片
				switcher.setImageResource(imageIds[position%imageIds.length]);
			}
		});*/
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
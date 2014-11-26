package com.example.creazy;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AnimationUtils;
import android.widget.AbsListView.LayoutParams;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.BaseAdapter;
import android.widget.Gallery;
import android.widget.ImageSwitcher;
import android.widget.ImageView;
import android.widget.ViewSwitcher.ViewFactory;

/**
 * 疯狂Android讲义:
 *  2.4.12 画廊视图(Gallery)的功能和用法(P121)
 *   实例: 幻灯片式图片浏览器
 * 
 * @author zjdgx
 * @since 2014-04-17
 */
@SuppressWarnings("deprecation")
public class P122_GalleryActivity extends Activity {

	int[] imageIds = new int[] { R.drawable.p122_baiyang,
			R.drawable.p122_chunv, R.drawable.p122_jinniu,
			R.drawable.p122_juxie, R.drawable.p122_mojie,
			R.drawable.p122_sheshou, R.drawable.p122_shizi,
			R.drawable.p122_shuangyu, R.drawable.p122_shuangzi,
			R.drawable.p122_shuiping, R.drawable.p122_tiancheng,
			R.drawable.p122_tianxie, };

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p122_gallery_activity_main);

		final Gallery gallery = (Gallery) findViewById(R.id.gallery);

		// 获取显示图片的ImageSwitcher
		final ImageSwitcher switcher = (ImageSwitcher) findViewById(R.id.switcher);
		// 为ImageSwitcher设置图片切换的动画效果
		switcher.setFactory(new ViewFactory() {
			@Override
			public View makeView() {
				ImageView imageView = new ImageView(P122_GalleryActivity.this);
				imageView.setBackgroundColor(0xff0000);
				imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
				imageView.setLayoutParams(new ImageSwitcher.LayoutParams(
						LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
				return imageView;
			}
		});
		// 设置图片显示的动画效果
		switcher.setInAnimation(AnimationUtils.loadAnimation(this,
				android.R.anim.fade_in));
		switcher.setOutAnimation(AnimationUtils.loadAnimation(this,
				android.R.anim.fade_out));

		// 创建一个SimpleAdapter
		BaseAdapter adapter = new BaseAdapter() {

			@Override
			public View getView(int position, View convertView, ViewGroup parent) {
				// 创建一个ImageView
				ImageView imageView = new ImageView(P122_GalleryActivity.this);
				imageView.setImageResource(imageIds[position]);
				// 设置ImageView的缩放类型
				imageView.setScaleType(ImageView.ScaleType.FIT_XY);
				imageView.setLayoutParams(new Gallery.LayoutParams(75, 100));
				// TypedArray typeArray =
				// obtainStyledAttributes(R.styleable.Gallery);
				// imageView.setBackgroundResource(typeArray.getResourceId(R.styleable.Gallery_android_galleryItemBackground,
				// 0));
				return imageView;
			}

			@Override
			public long getItemId(int position) {
				return position;
			}

			@Override
			public Object getItem(int position) {
				return imageIds[position];
			}

			@Override
			public int getCount() {
				return imageIds.length;
			}
		};
		gallery.setAdapter(adapter);
		gallery.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> parent, View view,
					int position, long id) {
				switcher.setImageResource(imageIds[position % imageIds.length]);
			}

			@Override
			public void onNothingSelected(AdapterView<?> arg0) {
			}

		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
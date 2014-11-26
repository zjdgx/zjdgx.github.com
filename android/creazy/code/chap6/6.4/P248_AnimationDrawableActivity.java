package creazy.chap6.section6_4;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.ImageView;

import com.example.creazy.R;

/**
 * 疯狂Android讲义:
 *  6.4.6 AnimationDrawable资源(P247)
 *   实例: 动画测试
 * 
 * @author zjdgx
 * @since 2014-05-14
 */
public class P248_AnimationDrawableActivity extends Activity {
	@SuppressLint("HandlerLeak")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.p248_animation_drawable_activity_main);
		
		final ImageView imageView = (ImageView)findViewById(R.id.p248_animation_drawable_image);
		
		final Animation anim = AnimationUtils.loadAnimation(this, R.anim.p248_animation_drawable_anim);
		// 设置动画结束后保留结束状态
		anim.setFillAfter(true);
		
		Button btn = (Button)findViewById(R.id.p248_start_animation_btn);
		
		btn.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				imageView.startAnimation(anim);
			}
		});
	}
}
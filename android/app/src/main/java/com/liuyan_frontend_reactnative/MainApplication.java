package com.liuyan_frontend_reactnative;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnativecommunity.viewpager.RNCViewPagerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import cn.jpush.reactnativejpush.JPushPackage;//极光推送

//友盟
import com.umeng.commonsdk.UMConfigure;
import com.umeng.socialize.PlatformConfig;
import com.liuyan_frontend_reactnative.umeng.DplusReactPackage;
import com.liuyan_frontend_reactnative.umeng.RNUMConfigure;
public class MainApplication extends Application implements ReactApplication {
  private boolean SHUTDOWN_TOAST = true;//关闭初始化成功的toast框
  private boolean SHUTDOWN_LOG = false;//极光推送
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSpinkitPackage(),
            new RNCViewPagerPackage(),
            new VectorIconsPackage(),
            new LinearGradientPackage(),
            new RNGestureHandlerPackage(),
            new JPushPackage(SHUTDOWN_TOAST,SHUTDOWN_LOG),//极光推送
            new DplusReactPackage()//友盟
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    //友盟
    RNUMConfigure.init(this, "5d5bb17a570df3aa260003e2", "Umeng", UMConfigure.DEVICE_TYPE_PHONE,"");
  }
  // 设置使用的三方平台的appkey：
  {
    PlatformConfig.setWeixin("wxdc1e388c3822c80b", "3baf1193c85774b3fd9d18447d76cab0");
    PlatformConfig.setSinaWeibo("3921700954", "04b48b094faeb16683c32669824ebdad", "http://sns.whalecloud.com");
    PlatformConfig.setQQZone("101773792", "9553206c62b3c205229954f2d09bccfb");
  }
}

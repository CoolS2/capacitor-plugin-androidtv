package com.capacitor.plugin.androidtv;

import android.content.pm.PackageManager;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AndroidTv")
public class AndroidTvPlugin extends Plugin {
    public static final String TAG = "DeviceTypeRuntimeCheck";
    private AndroidTv implementation = new AndroidTv();

    @PluginMethod
    public void isAndroidTv(PluginCall call) {
        boolean isTelevision = getPackageManager().hasSystemFeature(PackageManager.FEATURE_LEANBACK);

        JSObject ret = new JSObject();
        ret.put("value", isTelevision);

        call.resolve(ret);
    }

    private PackageManager getPackageManager() {
        return getActivity().getPackageManager();
    }
}

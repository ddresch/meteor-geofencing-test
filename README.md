# Geofencing Test

This app shows the problem which pops up when the app is started in background via the `cordova-background-geolocation-lt` plugin.

All is fine as long as the app is running. When the app is terminated it gets started again as expected but gets stuck in `App startup timed out ...` error.

# Test Case

  + In iOS Simulator
  + Debug -> Location -> Freeway Drive
  + Debug -> Open System Log
  + Push App in background (do not close)
  + Now you see the Local Push Messages
  + Back to the App and terminate it
  + Check the System Log and you should see something like the log below

# Log Output

```
  Geofencing[51177]: Using WKWebView
  Geofencing[51177]: [CDVTimer][handleopenurl] 0.065982ms
  Geofencing[51177]: [CDVTimer][intentandnavigationfilter] 2.664030ms
  Geofencing[51177]: [CDVTimer][gesturehandler] 0.075042ms
  Geofencing[51177]: Serving asset bundle version: 1e892668b1230262588f59d145c1b5ca2787d7ad
  Geofencing[51177]: [CDVTimer][webapplocalserver] 183.372021ms
  Geofencing[51177]: [CDVTimer][statusbar] 19.053042ms
  Geofencing[51177]: [CDVTimer][splashscreen] 5.279958ms
  Geofencing[51177]: [CDVTimer][backgroundfetch] 0.120997ms
  Geofencing[51177]: [CDVTimer][localstorage] 0.330985ms
  Geofencing[51177]: [CDVTimer][TotalPluginStartup] 212.901950ms
  Geofencing[51177]: SecTaskLoadEntitlements failed error=22 cs_flags=200, task->pid_self=51177
  Geofencing[51177]: SecTaskCopyDebugDescription: Geofencing[51177]
  assertiond[42612]: assertion failed: 15F34 13E230: assertiond + 16726 [1BD9E3D0-5485-3412-86B2-4BE50C825E80]: 0x1
  webinspectord[42671]: SecTaskLoadEntitlements failed error=22 cs_flags=200, task->pid_self=-1
  webinspectord[42671]: SecTaskCopyDebugDescription: Geofencing[51177]
  assertiond[42612]: assertion failed: 15F34 13E230: assertiond + 16726 [1BD9E3D0-5485-3412-86B2-4BE50C825E80]: 0x1
  Geofencing[51177]: App startup timed out, reverting to last known good version
```

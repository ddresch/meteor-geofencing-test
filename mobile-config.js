// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'ch.unknown.geofencing',
  name: 'Geofencing',
  description: 'Mobile Geofencing Test App.',
  author: 'unknown? studio',
  email: 'hello@unknown.ch',
  website: 'http://www.unknown.ch',
  version: '1.0'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');
App.setPreference('Orientation', 'portrait', 'ios');
// don't use icloud backup instead store all bits locally
App.setPreference('BackupWebStorage', 'local', 'ios');
// use faster scrolling speed for webview same speed like mobile safari
App.setPreference('UIWebViewDecelerationSpeed', 'fast', 'ios');
// increase startup timeout to 60 seconds
// App.setPreference('WebAppStartupTimeout', 60000);

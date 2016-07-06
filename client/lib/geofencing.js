Geofencing = {
  init: function(){
    // BackgroundGeoLocation is highly configurable.
    window.BackgroundGeolocation.configure({
      // Geolocation config
      desiredAccuracy: 100,
      distanceFilter: 50,
      stationaryRadius: 50,
      locationUpdateInterval: 1000,
      fastestLocationUpdateInterval: 5000,

      // Activity Recognition config
      activityType: 'AutomotiveNavigation',
      activityRecognitionInterval: 5000,
      stopTimeout: 1,

      // Application config
      debug: true,
      stopOnTerminate: false,
      startOnBoot: true,

      // deactivate HTTP / SQLite config
      url: '',
      autoSync: false,
      maxDaysToPersist: 1
    }, function(state) {
      // This callback is executed when the plugin is ready to use.
      console.log('BackgroundGeolocation ready: ', state);
      if (!state.enabled) {
        window.BackgroundGeolocation.start();
      }
    });
  },
  addFence: function(doc){
    window.BackgroundGeolocation.addGeofence({
      identifier: doc.name,
      radius: doc.radius,
      latitude: doc.lat,
      longitude: doc.lng,
      notifyOnEntry: true,
      notifyOnExit: false,
      notifyOnDwell: false,
      loiteringDelay: 30000   // <-- 30 seconds
    }, function() {
        console.log("Successfully added geofence");
    }, function(error) {
        console.warn("Failed to add geofence", error);
    });
  },
  removeFence: function(geofenceId){
    var self = this;
    window.BackgroundGeolocation.removeGeofence(geofenceId, function() {
        console.log("Successfully removed geofence");
    }, function(error) {
        console.warn("Failed to remove geofence", error);
    });
  }
}

export default Geofencing;

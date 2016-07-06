import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './lib/geofencing';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    Geofencing.addFence({
      name: "Test Geofence",
      radius: 100,
      lat: 33.645492,
      lng: -117.916260
    });
  },
});

Meteor.startup(function(){
  console.log('mobile-geofencing', 'Call startup sequence.');
  Geofencing.init();
});

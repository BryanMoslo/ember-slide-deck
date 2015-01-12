import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('/');
  this.resource('slides');
  this.resource('slide', { path: '/slides/:slide_id' });
});

export default Router;
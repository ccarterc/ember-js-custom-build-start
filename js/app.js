App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('home');
});

App.IndexRoute = Ember.Route.extend({
	beforeModel: function(){
		if(window.location.pathname.indexOf("test") === -1){
			this.transitionTo('home');
		}
	},
  	model: function() {
    	return ['red', 'yellow', 'blue'];
  	}
});

App.HomeRoute = Ember.Route.extend({
	
});



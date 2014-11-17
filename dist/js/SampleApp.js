App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('home', function(){
		this.resource('weird', {path: "/home-sub-page"});
  });
  this.resource('other-page');
  this.resource('scotts-page');
});
//You get a few routes for free: the ApplicationRoute and the IndexRoute (corresponding to the / path), but you can extend them.
App.IndexRoute = Ember.Route.extend({
  	model: function() {
    	return ['red', 'yellow', 'blue'];
  	}
});

App.HomeRoute = Ember.Route.extend({
	model: function(){
		return {
			testProp: "This is the testProp",
			things: ["99", "bottles", "of", "beer"]
		};
	},
	afterModel: function(model){
		model.otherProp = "This is otherProp and was added after the model was loaded";
		console.log("model inside the afterModel() of the App.HomeRoute", model);
	},
	setupController: function(controller) {
		console.log("this inside the setupController() of App.HomeRoute", this);
		console.log("controller inside the setupController() of App.HomeRoute", controller);
		// Set the IndexController's `title`
		//controller.set('title', "My App");
	}
});

App.HomeSubPageRoute = Ember.Route.extend({});//file names that are seperated with dashes are auto made into Uppercase Routes and Controllers.  You can extend it.
App.WeirdRoute = Ember.Route.extend({});


App.HomeController = Ember.ObjectController.extend({

});
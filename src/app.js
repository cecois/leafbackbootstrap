/* ----------
Here we have some bootstrapping stuff (not Twitter). 
------------ */

debug = true;

window.appHost = "http://localhost/app";

window.map = new L.Map('map', {
	zoomControl: false,
	center: [51.505, -0.09],
	attributionControl: false,
	zoom: 13
});

window.appBaseLayers = new BaseLayersCollection();
window.appBaseMapsMenuView = new BaseMapsMenuView({
	collection: appBaseLayers
});
appBaseLayers.fetch({
	success: function(collection) {
		// $el = $("#menu-basemap");
		// $el.empty();
		// and the prestige!
		// $el.html(appBaseMapsMenuView.render().el);
	}

});
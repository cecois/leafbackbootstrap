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


/*
--------------  basemap
*/
window.appBaseMap = new BaseMap();
window.appBaseMapView = new BaseMapView({
	model: appBaseMap
});

/*
--------------  baselayers
*/
window.appBaseLayers = new BaseLayersCollection();
window.appBaseLayersMenuView = new BaseLayersMenuView({
	collection: appBaseLayers
});
// appBaseLayers.fetch({
// 	success: function(collection) {
// 		// var $el = $("#menu-basemap");
// 		// $el.empty();
// 		// and the prestige!
// 		// $el.html(appBaseMapsMenuView.render().el);
// 		appBaseLayersMenuView.render().el;
// 	}

// });
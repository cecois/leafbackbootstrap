var BaseLayersCollection = Backbone.Collection.extend({
	model: BaseLayer,
	url: function() {
		return "js/models/layers.json"
	},
	initialize: function(options) {
		options || (options = {});
	},

	parse: function(data) {

		var layers = data.layers;

		var activeLayer = _.find(layers, function(lay) {
			return lay.active == true;
		});
		var activeLayerDef = activeLayer.definition;

		window.appBaseMap = new BaseMap();
		appBaseMap.set(activeLayer);
		window.appBaseMapView = new BaseMapView({
			model: appBaseMap
		});

		return layers;
	}

});
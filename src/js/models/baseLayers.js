var BaseLayersCollection = Backbone.Collection.extend({
	model: BaseLayer,
	url: function() {
		return "js/models/layers.min.json"
	},
	initialize: function(options) {
		options || (options = {});
		// this.query = options.query;
	},

	parse: function(data) {
		var layers = data.layers;

		var activeLayer = _.find(layers, function(lay) {
			return lay.active == true;
		});
		var activeLayerDef = activeLayer.definition;



		appBaseMap.set(activeLayer);

		return layers;
	}

});
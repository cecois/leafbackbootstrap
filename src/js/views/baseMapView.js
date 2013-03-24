var BaseMapView = Backbone.View.extend({

	id: "map",

	initialize: function() {
		options = null;
		console.log("options:");console.log(options);
		// this.updateBaseMap();
		// this.render();
		this.collection.bind("change", this.render, this);
	},
	getActiveLayer:function(){
		var activeLayer = _.find(this.collection.models, function(lay) {
			return lay.get("active") == true;
		});
		return activeLayer

	},
	render: function(model,options) {
		console.log("in render of bmv");

		// if(typeof options=='undefined' || options.render==1){
		if(options == null || options.render==1){
			console.log("render flag was either null or 1:");

		var activeLayer = this.getActiveLayer()

		var def = activeLayer.get("definition");

		// remove global layer here first so we don't keep stacking baselayers
		// (we only need one baselayer at a time, of course)
		if(typeof baseLayer == 'undefined') {
			baseLayer = null;
		} else {
			map.removeLayer(baseLayer);
		}

		if(activeLayer.get("source") == "stamen") {

			baseLayer = new L.StamenTileLayer(def.id);
		} else if(def.subdomains != undefined) {

			baseLayer = new L.TileLayer(def.url, {
				subdomains: def.subdomains,
				maxZoom: 18
			});

		} else {

			baseLayer = new L.TileLayer(def.url, {
				maxZoom: 18
			});
		}
		map.addLayer(baseLayer);

		var mapBounds = map.getBounds();
		map.fitBounds(mapBounds);
		}

	},
	updateBaseMapX: function() {
		var def = this.model.get("definition");

		console.log(def);

		// remove global layer here first so we don't keep stacking baselayers
		// (we only need one baselayer at a time, of course)
		if(typeof baseLayer == 'undefined') {
			baseLayer = null;
		} else {
			map.removeLayer(baseLayer);
		}

		console.log("bmv, source is:");
		console.log(this.model.get("source"));
		if(this.model.get("source") == "stamen") {

			baseLayer = new L.StamenTileLayer(def.id);
		} else if(def.subdomains != undefined) {

			baseLayer = new L.TileLayer(def.url, {
				subdomains: def.subdomains,
				maxZoom: 18
			});

		} else {

			baseLayer = new L.TileLayer(def.url, {
				maxZoom: 18
			});
		}
		console.log("in updatebasemap, baseLayer is:");
		console.log(baseLayer);
		map.addLayer(baseLayer);



	}



});
var BaseMapView = Backbone.View.extend({

	id: "map",

	initialize: function() {

		// this.updateBaseMap();
		// this.render();
		console.log("BaseMapView:");console.log(this);
		this.model.bind("change", this.updateBaseMap, this);
	},

	render: function() {

		var mapBounds = this.model.getBounds();
		map.fitBounds(mapBounds);

	},
	updateBaseMap: function() {
		var def = this.model.get("definition");

		console.log("in updatebasemap, def:");
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
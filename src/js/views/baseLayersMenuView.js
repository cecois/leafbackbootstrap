var BaseLayersMenuView = Backbone.View.extend({
  el: "#menu-basemap",
  tagName : "ul",
  className : "thumbnails",

  initialize:function(){
    this.render();
    this.collection.bind('change:active', this.process, this);
  },

render : function() {

    this.collection.each(function(baselayer) {
      var appBaseLayerMenuView = new BaseLayerMenuView({ model : baselayer });
      $(this.el).append(appBaseLayerMenuView.render().el);
    }, this);
    return this
  },
  process:function(amodel){
 //A model was toggled (on or off)
    if(amodel.get('active') == true) {
      //A model was toggled ON, so check if a different model is already selected
      var nonActive = this.collection.find(function(model) {
        return amodel !== model && model.get('active');
      });

      if(nonActive != null) {
        //Another model was selected, so toggle it to off
        nonActive.set({'active': false});
      }

  }
}
});
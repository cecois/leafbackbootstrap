var BaseLayerMenuView = Backbone.View.extend({
  tagName:"li",
  template: Handlebars.templates['tpl-menu-BaseLayer-item'],
  events: {
    "click .thumbnail":"setActiveLayer",
    // "click a":"killtt",
    // "click a":"rewire"
  },
  initialize: function() {
    console.log("bmmview init, this.model:");console.log(this.model.get("name"));
    this.model.bind("change", this.render, this);

  },
  killtt:function(){
// tooltip killer
  $(this.el).find("a").tooltip('destroy');

  },

  setActiveLayer: function(){
    console.log("in bmmview setBaseLayer, this.model pre-set:");console.log(this.model.get("name"));
this.model.set({"active":true});
// console.log("in bmmview setBaseLayer, this.model post-set:");console.log(this.model.get("name"));
// var newBaseLayer = this.model;
// console.log("newbaselayer:");console.log(newBaseLayer);
// appBaseLayer.set(newBaseLayer);
  },

	render: function() {
    this.killtt();
    $(this.el).html(this.template(this.model.toJSON()));
    return this
    .rewire()

	},

  rewire:function(){
    // tooltip (or other) hookup
this.$("a").tooltip({placement:'bottom',trigger:'hover'})
return this

  }

});
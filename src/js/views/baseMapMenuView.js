var BaseMapMenuView = Backbone.View.extend({

  tagName:"li",
  template: Handlebars.compile($("#baseMapMnu").html()),
  events: {
    "click .thumbnail":"setBaseMap",
    "click a":"killtt",
    "click a":"rewire"
  },
  initialize: function() {
    this.model.bind("change", this.render, this);

  },
  killtt:function(){

  $(this.el).find("a").tooltip('destroy');

  },

  setBaseMap: function(){
this.model.set({"active":true});
var newBLayer = this.model;
appBaseMap.set(newBLayer);
  },

	render: function() {
    this.killtt();
    $(this.el).html(this.template(this.model.toJSON()));
    return this
    .rewire()

	},

  rewire:function(){
this.$("a").tooltip({placement:'top',trigger:'hover'})
return this

  }

});
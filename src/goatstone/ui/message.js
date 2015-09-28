/* goatstone.ui.message Jose Collas 9.2015 */

var DocumentRow = Backbone.View.extend({
  tagName: "li",
  className: "document-row",
  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
  	this.$el.html('<span class="icon">hello...XXX </span>');       
  },
  open:()=>{
  	console.log('open');
  }
});

export default DocumentRow;
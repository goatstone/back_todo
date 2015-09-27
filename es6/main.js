/* HTML Color Names */
import Point from './Point.js';
import Backbone from 'backbone';
var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);
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
  	this.$el.html('<span class="icon">hello...</span>');       
  },
  open:()=>{
  	console.log('open');
  }
});
var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = "red";
    this.set({color: cssColor});
  }
});
var sb = new Sidebar;
sb.on('change:color', function(model, color) {
	console.log(this);
  //$('body').css({background: color});
});
sb.set({color: 'white'});
sb.promptColor();

var DOMEl = document.body;
var d = new DocumentRow({
  el:DOMEl,
  id: "document-row-"  
}).render();
//d.setElement( el ).render();
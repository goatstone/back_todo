/* goatstone.model.todo.js Jose Collas 9.2015 */

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

export default Sidebar;
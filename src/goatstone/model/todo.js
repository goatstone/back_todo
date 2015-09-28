/* goatstone.model.todo.js Jose Collas 9.2015 */

var Todo = Backbone.Model.extend({
   constructor: function() {
    	this.defaults = {
    		clickCount:0,
    		color:'aqua'
    	};
    	Backbone.Model.apply(this, arguments);
  },
  promptColor: function() {
    this.set({color: 'red'});
    this.logState();
  },
  logState: function(){
  	console.log('todo model', this.attributes);
  }
});

export default Todo;
/* goatstone.model.todo.js Jose Collas 9.2015 */
var Todo = Backbone.Model.extend({
   constructor: function() {
    	this.defaults = {
    		clickCount:0,
    		color:'aqua',
    		title:'',
    		todo:''
    	};
    	Backbone.Model.apply(this, arguments);
  },
  getInformation: function(){
  	var str = JSON.stringify(this.attributes);
  	return 'todo model' + str ;
  }
});

export default Todo;
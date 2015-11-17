/* goatstone.model.todo.js Jose Collas 9.2015 */
var Todo = Backbone.Model.extend({
   url: "http://192.168.1.7:3000/todo",
   constructor: function() {
    	this.defaults = {
    		clickCount:0,
    		color:'aqua',
    		title:'A Todo Title',
    		todo:'Something to do.'
    	};
    	Backbone.Model.apply(this, arguments)
  },
  validate: function( attrs, options ){
    if( attrs.title.length < 2 ){
      return "Invalid todo value entered"
    }
  },
  getInformation: function(){
  	var str = JSON.stringify(this.attributes)
  	return 'todo model' + str 
  }
})

export default Todo
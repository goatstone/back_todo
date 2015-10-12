/* goatstone/ui/todo.js  Jose Collas 10.l2015 */
var React = require('react');
var ReactDOM = require('react-dom');
var Todo = Backbone.View.extend({
  initialize: function(a) {
    this.title =  'abc',
    this.style = {};
    return this
  },
  render: function(msg) {
    ReactDOM.render(
    	<section style={this.style}>TODO
    	{  this.title } 
    	</section>, 
    	this.el)
    return this 
  },
  setStyle: function(s){
    this.style = s    
    return this
  },
  setColor: function(c){
    this.style.backgroundColor = c    
    return this
  }}
  )

export default Todo
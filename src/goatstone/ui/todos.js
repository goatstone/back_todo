/* goatstone/ui/todos.js  Jose Collas 10.l2015 */
var React = require('react');
var ReactDOM = require('react-dom');
var Todos = Backbone.View.extend({
  initialize: function(a) {
    this.todos = ['abc'],
    this.style = {};
    return this
  },
  render: function(msg) {
    ReactDOM.render(
    	<section style={this.style}>
    	{  this.todos.join(':::') } 
    	</section>, 
    	this.el)
    return this 
  },
  setStyle: function(s){
    this.style = s    
    return this
  }
})
export default Todos
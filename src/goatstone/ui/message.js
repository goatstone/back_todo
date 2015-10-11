/* goatstone.ui.message Jose Collas 9.2015 */
import dispatcher from 'goatstone/event/dispatcher';
var React = require('react');
var ReactDOM = require('react-dom');
var Message = Backbone.View.extend({
  initialize: function(a) {
    this.message = [],
    this.style = {};
    return this
  },
  set: function(msg) {
    this.message = [ msg ]
    this.render()
    return this
  },
  append: function(msg){
    this.message.push(msg)
    this.render()
    return this
  },
  render: function(msg) {
    ReactDOM.render(<div style={this.style}>{  this.message.join(':::') } </div>, this.el)
    return this 
  },
  setStyle: function(s){
    this.style = s    
    return this;
  },
  setColor: function(color){
    this.style.color = color
    this.render()
    return this
  }
});
export default Message
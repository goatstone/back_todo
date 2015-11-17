/* goatstone/ui/input.js */
var React = require('react');
var ReactDOM = require('react-dom');
var Button = Backbone.View.extend({
  events: {
    'click button': function (v) {
      this.trigger('activate',  1 )
    }
  },
  initialize: function() {
    this.style = {color:'red'}
    return this;
  },
  setStyle: function(s){
    this.style = s    
    return this;
  },
  render: function(msg) {
    ReactDOM.render(<button style={this.style}>Add Todo</button>, this.el)
    return this 
  } 
})
export default Button
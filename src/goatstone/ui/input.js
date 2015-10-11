/* goatstone/ui/input.js */
var React = require('react');
var ReactDOM = require('react-dom');
var Input = Backbone.View.extend({
  events: {
    'keyup': function (v) {
      this.trigger('change',  this )
    }
  },
  initialize: function() {
    this.style = {};
    this.render()
    return this;
  },
  render: function(msg) {
    ReactDOM.render(<label style={this.style}><input /></label>, this.el)
    return this 
  },
  setStyle: function(s){
    this.style = s    
    return this;
  },
  focus: function(){
    //this.el_1.focus();
  }
})
export default Input
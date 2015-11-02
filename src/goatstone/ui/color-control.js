/* goatstone/ui/color-control.js */
var React = require('react');
var ReactDOM = require('react-dom');
var colorControl = Backbone.View.extend({
  events: {
    "click button[data-id=r]": function (v) {
    	this.trigger('change', {color:'red'})
    },
    "click button[data-id=g]": function (v) {
      this.trigger('change', {color:'green'})
    },
    "click button[data-id=b]": function (v) {
      this.trigger('change', {color:'blue'})
    }
  },
  initialize: function() {
    var colorStyle = {
      color:'white',
      padding:'6px', 
      margin:'3px', 
      borderRadius:'6px'
    }
    this.rStyle = Object.assign({}, colorStyle, {background:'red'})
    this.gStyle = Object.assign({}, colorStyle, {background:'green'})
    this.bStyle = Object.assign({}, colorStyle, {background:'blue'})
    this.style = {
      'position': 'absolute',
      'top':'5px',
      'right':'5px',
      'background':'#ccc',
      'width':'150px',
      'padding': '12px',
      'borderRadius': '5px'
    }
    this.render()
  },
  render: function(msg) {
    ReactDOM.render(
      <div style={this.style}>  
        <button data-id={'r'} style={this.rStyle}>R</button> 
        <button data-id={'g'} style={this.gStyle}>G</button> 
        <button data-id={'b'}  style={this.bStyle}>B</button> 
        </div>, 
      this.el)
    return this 
  } 
})
export default colorControl
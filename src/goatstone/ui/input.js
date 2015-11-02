/* goatstone/ui/input.js */
var React = require('react');
var ReactDOM = require('react-dom');
var Input = Backbone.View.extend({
  events: {
    'keyup input': function ( v ) {
      this.trigger('change.input',  v.target.value )
    },
    'keyup textarea': function ( v ) {
      this.trigger('change.textarea',  v.target.value )
    }
  },
  initialize: function() {
    this.style = {
      'position': 'absolute',
      'bottom':'5px',
      'left':'5px',
      'width': '240px',
      'backgroundColor': '#ccc',
      'padding': '6px',
      'borderRadius':'6px',
      'fontFamily':'sans-serif',
      'display': 'inline-block',
      'borderRadius': '5px',
      'zIndex':'-1000' 
    }

    this.inputStyle = {
      'margin': '6px',
      'display': 'block'       
    } 
    this.labelStyle = {
      'padding': '3px'
    }
    this.render()
    return this;
  },
  render: function(msg) {
    ReactDOM.render(
       <div style={ this.style }>
       
        <label style={ this.labelStyle } > Title
          <input  style={ this.inputStyle } />
        </label> 

        <label style={ this.labelStyle }> Todo
          <textarea  style={ this.inputStyle }/>
        </label>  

       </div>
        , this.el)
    return this 
  },
  focus: function(){
    //this.el_1.focus();
  }
})
export default Input
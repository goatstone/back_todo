/* goatstone.ui.message Jose Collas 9.2015 */
import dispatcher from 'goatstone/event/dispatcher';
var React = require('react');
var ReactDOM = require('react-dom');
var Message = Backbone.View.extend({
  initialize: function(a) {
    this.message = [],
    this.style = { 
      'backgroundColor': '#ccc', 
      'position': 'fixed',
      'bottom': '5px',
      'right': '5px',
      'width': '200px',
      'padding': '20px',
      'borderRadius': '12px'   
    };
    this.listenTo( this.model, 'change', this.render )
    return this
  },
  render: function( msg ) {
    ReactDOM.render(<div style={this.style}>{  this.model.get('text')  } </div>, this.el)
    return this 
  } 
});
export default Message
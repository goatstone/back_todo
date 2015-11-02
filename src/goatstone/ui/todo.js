/* goatstone/ui/todo.js  Jose Collas 10.l2015 */
var React = require('react');
var ReactDOM = require('react-dom');
var Todo = Backbone.View.extend({
  initialize: function(a) {
    this.title =  'abc',
    this.style = {
      'width':'400px',
      'backgroundColor':'green',
      'padding':'15px',
      'borderRadius':'10px',
      'fontFamily':'sans-serif',
      'fontSize':'2em',
      'color': '#eee',
      'marginLeft': '40px',
      'marginTop': '70px',
      'zIndex':'1000'
    };

    this.listenTo( this.model, 'change', this.render )
    this.listenTo( this.model, 'invalid', this.setInvalid )

    return this
  },
  eMsg: "hello",
  setInvalid: function(){
    console.log('setvalid')
  },
  render: function(msg) {
    this.style.backgroundColor = this.model.get('color')
    ReactDOM.render(
    	<section style={this.style}>

      {  this.model.get('title') } 
      <br />
      {  this.model.get('todo') } 
    	
      </section>
      , 
    	this.el)
    return this 
  },
  setStyle: function(s){
    //this.style = s    
    return this
  },
  setColor: function(c){
    this.style.backgroundColor = c    
    return this
  }}
  )

export default Todo
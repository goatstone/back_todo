/* goatstone/ui/input.js */
var Button = Backbone.View.extend({
  el: "body",
  events: {
    'click button': function (v) {
      this.trigger('activate',  1 )
    }
  },
  initialize: function() {
    this.color = 'azure'
    this.el_1 = document.createElement('button')
    this.el_1.style.color = 'black';
    var txt = document.createTextNode('Add Todo')
    this.el_1.appendChild(txt)
    this.el.appendChild(this.el_1)
    return this;
  },
  render: function(msg) {
    this.el_1.style.backgroundColor = this.color;
    return this 
  } 
})
export default Button
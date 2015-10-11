/* goatstone/ui/input.js */
var Input = Backbone.View.extend({
  el: "body",
  events: {
    'keyup': function (v) {
      this.color = '#ccc'
      this.trigger('change',  this.el_1.value )
    }
  },
  initialize: function() {
    this.color = 'azure'
    this.el_1 = document.createElement('input')
    this.el_1.style.color = 'black';
    this.el_1.setAttribute('class', 'a')
    this.el_1.value = 'enter'
    this.el.appendChild(this.el_1)
    this.el_1.focus();
  },
  render: function(msg) {
    this.el_1.style.backgroundColor = this.color;
    return this 
  },
  focus: function(){
    this.el_1.focus();
  }
})
export default Input
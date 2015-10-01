/* goatstone/ui/color-control.js */
var colorControl = Backbone.View.extend({
  el: "body",
  events: {
    "click .change_it": function (v) {
    	console.log('change it!!!', this)
    	this.trigger('change', {color:'red'})
    }
  },
  initialize: function() {
    this.color = 'azure'
    this.el_1 = document.createElement('div')
    this.el_1.setAttribute('class', 'change_it')
    this.el_1.innerHTML = 'set color'
    this.el.appendChild(this.el_1)
  },
  render: function(msg) {
    //this.el_1.style.backgroundColor = this.color;
    return this 
  }
})
export default colorControl
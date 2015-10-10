/* goatstone.ui.message Jose Collas 9.2015 */
import dispatcher from 'goatstone/event/dispatcher';

var Message = Backbone.View.extend({
  el: "body",
  events: {
    "click .count_it": "countClick"
  },
  initialize: function() {
    this.message = '0'
    this.color = 'red'
    this.forgroundColor = 'red'
    this.el_1 = document.createElement('div')
    this.el_1.setAttribute('class', 'count_it')
    this.el_1.innerHTML = '1'
    this.el.appendChild(this.el_1)
  },
  set: function(msg) {
    this.message = msg
    return this
  },
  render: function(msg) {
    this.el_1.style.backgroundColor = this.color
    this.el_1.innerHTML = this.message
    return this 
  },
  setColor: function(color){
    this.color = color
    this.render()
    return this
  }
});
export default Message
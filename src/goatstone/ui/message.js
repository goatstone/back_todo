/* goatstone.ui.message Jose Collas 9.2015 */
import dispatcher from 'goatstone/event/dispatcher';

var Message = Backbone.View.extend({
  el: "body",
  events: {
    "click .count_it": "countClick"
  },
  initialize: function() {
    this.message = [],
    this.color = 'red'
    this.el_1 = document.createElement('div')
    this.el_1.setAttribute('class', 'count_it')
    this.ul = document.createElement('ul')
    this.el_1.appendChild(this.ul);
    this.el.appendChild(this.el_1)
  },
  set: function(msg) {
    this.message = [ msg ]
    this.render()
    return this
  },
  append: function(msg){
    this.message.push(msg)
    this.render()
    return this
  },
  render: function(msg) {
    this.el_1.style.backgroundColor = this.color 
    this.el_1.style.position = 'absolute'
    this.el_1.style.bottom = 0 
    this.el_1.style.right = 0 
    this.ul.innerHTML = '<li>'+this.message.join("<li>")
    return this 
  },
  setColor: function(color){
    this.color = color
    this.render()
    return this
  }
});
export default Message
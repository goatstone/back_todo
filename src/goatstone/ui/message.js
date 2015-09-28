/* goatstone.ui.message Jose Collas 9.2015 */

var Message = Backbone.View.extend({
  el: "body",
  events: {
    "click .count_it":          "countClick"
  },
  initialize: function(settings) {
    this.dispatcher = settings.dispatcher;
    // TODO put this in the model!!!!
    this.clicks = 0;

    // element one
    this.el_1 = document.createElement('div');
    this.el_1.setAttribute('class', 'count_it');
    this.el_1.innerHTML = 'xxxx';
//    this.listenTo(this.model, "change", this.render);

    // append DOM elements to body
    this.el.appendChild(this.el_1);
  },
  render: function() {
    this.el_1.innerHTML = this.clicks;
    return this; 
  },
  countClick: function() {
    // update the model with this event incrementClick
    this.clicks++;
    this.dispatcher.trigger('clickDOM', 1);
    this.render();
  }
});

export default Message;
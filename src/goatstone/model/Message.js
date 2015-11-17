/* goatstone.model.Message Jose Collas 10.2015  */

var Message = Backbone.Model.extend({
	defaults: {
		title: 'messageModel',
		text: 'text default',
		a: ' a default' 
    },
    constructor: function() {
	    Backbone.Model.apply(this, arguments);
   } 
})

export default Message
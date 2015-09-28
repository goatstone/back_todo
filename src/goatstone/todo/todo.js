/* goatstone.todo.todo.js Jose Collas 9.2015 */

import Backbone from 'backbone';
import Point from 'goatstone/shape/Point.js';
import Message from 'goatstone/ui/message'
import TodoModel from 'goatstone/model/todo'
import Dispatcher from 'goatstone/event/dispatcher';

var tdm = new TodoModel();

Dispatcher.on("clickDOM", function(msg) {
	tdm.set({color: 'green'});
	var newCount = 1 + tdm.get('clickCount') ;
	tdm.set( {clickCount: newCount} );
	tdm.logState();
});
Dispatcher.on("init", function(msg) {
  	tdm.promptColor();
});
Dispatcher.trigger('init', 222)

new Message({dispatcher:Dispatcher})
.render();

//var p = new Point(1, 2);

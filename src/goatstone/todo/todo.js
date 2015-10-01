/* goatstone.todo.todo.js Jose Collas 9.2015 */

import Backbone from 'backbone';
import Point from 'goatstone/shape/Point.js';
import Message from 'goatstone/ui/message'
import TodoModel from 'goatstone/model/todo'
import todo from 'goatstone/event/dispatcher';
var todoModel, message;

todo.on("init", function(eventData) {
	todoModel = new TodoModel();
	message = new Message().set('hello').render();
});
todo.on('all', function(d){
	message.set(d).render();
	console.log('todo:all', d);
});
todo.trigger('init', 1);
todo.trigger('a', 2);
todo.trigger('b', 3);

todoModel.on('init', function(){
	console.log('todoModel : init');
})

// todoModel
todoModel.on('all', function(d){
	console.log('todoModel : all', d);
})
todoModel.on('change:color', function(model, color) {
	message.setColor(color);
});
todoModel.set({color: 'blue'});
setTimeout(function(){
	todoModel.set({color: 'green'});
}, 1000);

// message set event on message view only
message.on('all', function(d, b){
	console.log('a', arguments);
});
message.setTrigger();
message.trigger( 'change', { "color": "blue" } );


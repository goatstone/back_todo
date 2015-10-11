/* goatstone.todo.todo.js Jose Collas 9.2015 */
import Backbone from 'backbone'
import todoEventDispatcher from 'goatstone/event/dispatcher'
import TodoModel from 'goatstone/model/todo'
import Message from 'goatstone/ui/message'
import ColorControl from 'goatstone/ui/color-control'
import Input from 'goatstone/ui/input'
import Button from 'goatstone/ui/button'

var todoModel, message, colorControl, input, button
todoModel = new TodoModel()
colorControl = new ColorControl()
input = new Input().render()
message = new Message().set('hello')
button = new Button()

// todoModel Backbone Model
todoModel.on('init', function(){
 	message.append('todoModel : init')
})
todoModel.on('all', function(v){
 	message.append( 'todod model all: ' + v   )
})
todoModel.on('change:color', function(model, color) {
	message.setColor(color)
})
// input
input.on('all', function(event, data){
	message.set( 'event:  ' +  event + ' data: '+data   ) 
	todoModel.set({color: 'red'})
})
// button
button.on('activate', function(v){
	message.append('aaa' + v )
	todoModel.set({title: ' hello todo'})
})
// colorControl Backone View
colorControl.on('all', (name, data)=>{
	message.append('all from color control', name, data)
})
 
// todoEventDispatcher
todoEventDispatcher.on('init', v => {
	message.append( 'todoEventDispatcher init: ' + v ) 
}).on('all', v => {
	message.append( 'todoEventDispatcher all: ' + v ) 
}).on('hello', v => {
 	message.append( ' hello '   ) 
})

/*
 start to trigger events
*/
// todoEventDispatcher
// .trigger( 'init', {id:12333} )
// .trigger( 'a', {id:'X'} )
// .trigger( 'hello', {id:2} )

//message.trigger( 'change', { "color": "blue" } )

todoModel.set({color: 'azure'})

setTimeout(function(){
	todoEventDispatcher.trigger( 'hello', {id:2222222} )
	todoModel.set({color: '#ccc'})
}, 1000)

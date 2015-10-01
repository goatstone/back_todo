/* goatstone.todo.todo.js Jose Collas 9.2015 */
import Backbone from 'backbone'
import todoEventDispatcher from 'goatstone/event/dispatcher.js'
import TodoModel from 'goatstone/model/todo.js'
import Message from 'goatstone/ui/message.js'
import ColorControl from 'goatstone/ui/color-control.js'

var todoModel, message, colorControl
todoModel = new TodoModel()
message = new Message().set('hello').render()
colorControl = new ColorControl().render()

// todoEventDispatcher
todoEventDispatcher
.on('init', v => {
	console.log('init...')
})
.on('all', v => {
	console.log('all', v);
})
.on('a', v => {
	console.log('a')
})
.on('hello', v => {
	console.log('hello', v)
 	message.set( '---' + v.id + new Date() ).render()
})
// todoModel Backbone Model
todoModel.on('init', function(){
	console.log('todoModel : init')
})
todoModel.on('all', function(d){
	console.log('todoModel : all', d)
})
todoModel.on('change:color', function(model, color) {
	message.setColor(color)
})
// message Backbone View set event on message view only
message.on('all', function(d, b){
	console.log('a', arguments)
})
// colorControl Backone View
colorControl.on('all', (name, data)=>{
	console.log('all from color control', name, data)
})

// start trigger and set
todoEventDispatcher
.trigger( 'init', {id:12333} )
.trigger( 'a', {id:'X'} )
.trigger( 'b', {id:2} )
.trigger( 'hello', {id:2} )

message.trigger( 'change', { "color": "blue" } )

todoModel.set({color: 'green'})

setTimeout(function(){
	todoEventDispatcher.trigger( 'hello', {id:22222222} )
	todoModel.set({color: 'azure'})
}, 1000)

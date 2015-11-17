/* goatstone.todo.todo.js Jose Collas 9.2015 */
import Backbone from 'backbone'
import TodoModel from 'goatstone/model/todo'

import MessageModel from 'goatstone/model/Message'
import Message from 'goatstone/ui/message'

import ColorControl from 'goatstone/ui/color-control'
import Input from 'goatstone/ui/input'
import Button from 'goatstone/ui/button'
import Todos from 'goatstone/ui/todos'
import Todo from 'goatstone/ui/todo'
import style from 'goatstone/ui/style'

var todoModel, message, colorControl, input, button, todos, todo, messageModel

// todos
//todos = new Todos({el:getElement() }).setStyle( style.main ).render();

// input
input = new Input( { el: getElement() } )
.on('change.input', function( data ){
	todoModel.set( { title: data } )
})
.on('change.textarea', function( data ){
	todoModel.set( { todo: data } )
})

// button
// button = new Button( { el: getElement() } )
// .setStyle( style.main ).render()
// button.on('activate', function(v){
// 	todoModel.set({title: ' hello todo'})
// })

// colorControl 
colorControl = new ColorControl({el: getElement() })
.on('change', ( data )=>{
	todoModel.set( { color: data.color } )
})

// message 
messageModel = new MessageModel(
	{
		text: 'hello todo!'
	});
message = new Message( { 
	el: getElement(), model: messageModel 
})

// todo model and view
todoModel = new TodoModel()
todo = new Todo(
	{
		el: getElement(),
		model: todoModel
	} )

// set up the todoModel
todoModel
.on( 'all', function( v ){
	//console.log('todoModel : ' , v)
})
.on( 'change:color', function( model, color ) {
	// TODO does this go in the model???
	todoModel.save( {
		error: function(){ 
			// console.log('errror')
		}	
	});
	messageModel.set( 'text', color   )
})
.on("invalid", function(model, error) {
	console.log(' invalid : ', error )
	//set the input 
	input.setError( error )
})
.set( { color: 'green' } )


function getElement(){
	var el = document.createElement('span')
	document.body.appendChild( el )
	return el
}

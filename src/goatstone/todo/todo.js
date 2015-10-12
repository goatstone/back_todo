/* goatstone.todo.todo.js Jose Collas 9.2015 */
import Backbone from 'backbone'
import TodoModel from 'goatstone/model/todo'
import Message from 'goatstone/ui/message'
import ColorControl from 'goatstone/ui/color-control'
import Input from 'goatstone/ui/input'
import Button from 'goatstone/ui/button'
import Todos from 'goatstone/ui/todos'
import Todo from 'goatstone/ui/todo'
import style from 'goatstone/ui/style'

var todoModel, message, colorControl, input, button, todos, todo

// todo
var tdEl = document.createElement('span')
todo = new Todo({el:tdEl})
.setStyle( style.main ).render();
// todos
var tdsEl = document.createElement('span')
todos = new Todos({el:tdsEl})
.setStyle( style.main ).render();

// input
var iEl = document.createElement('span')
input = new Input( {el:iEl} )
.setStyle( style.main ).render()
input.on('all', function(event, data){
	todoModel.set({color: 'red'})
})
// button
var bEl = document.createElement('span')
button = new Button({el: bEl})
.setStyle( style.main )
.render()
button.on('activate', function(v){
	todoModel.set({title: ' hello todo'})
})
// colorControl Backone View
var ccEl = document.createElement('span')
colorControl = new ColorControl({el: ccEl})
.setStyle( style.main ).render()
.on('change', ( data )=>{
	todoModel.set({color: data.color})
})

// message view
var mEl = document.createElement('span')
message = new Message( {el:mEl} )
.setStyle( Object.assign({}, style.main, style.message ) )
.set( 'hello' )

// add elements to DOM
document.body.appendChild(iEl)
document.body.appendChild(mEl)
document.body.appendChild(bEl)
document.body.appendChild(ccEl)
document.body.appendChild(tdsEl)
document.body.appendChild(tdEl)

// todoModel Backbone Model
todoModel = new TodoModel()
todoModel.on('all', function(v){
 	message.append( ' : ' + v   )
})
todoModel.on('change:color', function(model, color) {
	todo.setColor(color).render()
})
todoModel.set({color: 'red'})
 
setTimeout(function(){
	todoModel.set({color: 'blue'})
}, 3000)

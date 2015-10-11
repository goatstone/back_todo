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

var mainStyle = 	{ 
      color: 'blue',
      backgroundColor:'#ccc',
      padding:'12px',
      position:'relative',
      display:'inline-block',
      // margin:'12px',
      borderRadius:'12px',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    }
var componentStyle = 	{ 
      position: 'absolute',
      bottom: 0,
      left: 0,
      minHeight:'60px'
    }
var messageStyle = {
    width:'90%',
    margin:'6px'
}

var messageStyle = {}
Object.assign(messageStyle, mainStyle, componentStyle, messageStyle)

var mEl = document.createElement('span')
message = new Message( {el:mEl} )
.setStyle( messageStyle )
.set( 'hello' )

var iEl = document.createElement('span')
input = new Input( {el:iEl} )
.setStyle( mainStyle )
.render()
input.on('all', function(event, data){
	//message.set( 'event:  ' +  event + ' data: '+data   ) 
	todoModel.set({color: 'red'})
})
// button
var bEl = document.createElement('span')
button = new Button({el: bEl})
.setStyle(  mainStyle   )
.render()
button.on('activate', function(v){
	message.append('aaa' + v )
	todoModel.set({title: ' hello todo'})
})
// colorControl Backone View
var ccEl = document.createElement('span')
colorControl = new ColorControl({el: ccEl})
.setStyle(  mainStyle   )
.render()
colorControl.on('all', (name, data)=>{
	message.append('all from color control', name, data)
	message.setColor(data.color)
})
// add elements to DOM
document.body.appendChild(iEl)
document.body.appendChild(mEl)
document.body.appendChild(bEl)
document.body.appendChild(ccEl)

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
// .trigger( 'hello', {id:2} )

todoModel.set({color: 'azure'})

setTimeout(function(){
	todoEventDispatcher.trigger( 'hello', {id:2222222} )
	todoModel.set({color: 'blue'})
}, 1000)

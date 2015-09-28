/* goatstone.todo.todo.js Jose Collas 9.2015 */
import Point from '/home/goat/projects/BackToDo/src/goatstone/shape/Point.js';
import Backbone from 'backbone';
import Message from '/home/goat/projects/BackToDo/src/goatstone/ui/message'
import Sidebar from '/home/goat/projects/BackToDo/src/goatstone/model/todo'

var DOMEl = document.body;
var d = new Message({
  el:DOMEl,
  id: "document-row-"  
}).render();

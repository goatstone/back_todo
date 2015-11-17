/* goatstone/event/dispatcher.js Jose Collas 9.2015 */
import Backbone from 'backbone'
var Dispatcher = {}
Dispatcher.trigger = function( name, data ){
	Backbone.Events.trigger(name, data)
	return this
}
Dispatcher.on = function(a, b){
	Backbone.Events.on(a, b)
	return this
 }
export default Dispatcher
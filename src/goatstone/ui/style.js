/* goatstone/ui/style.js Jose Collas 10.2015 */

var style = {
	'main':  
    {
		color: 'blue',
		backgroundColor:'#ccc',
		padding:'12px',
		position:'relative',
		display:'inline-block',
		borderRadius:'12px',
		WebkitTransition: 'all', // note the capital 'W' here
		msTransition: 'all' // 'ms' is the only lowercase vendor prefix
	},
	'component':   	
	{ 
		minHeight:'60px'
    },
	'message' : 
	{
		position:'absolute',
		width:'90%',
		margin:'6px',
		bottom: 0,
		left: 0,
	}
}

export default style
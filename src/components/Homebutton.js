import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

class Homebutton extends React.Component {
	render() {
		return (
			<Link to='/'>
				<button>Home</button>
			</Link>
		)
	}
}

export default Homebutton
import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

class Aboutbutton extends React.Component {
	render() {
		return (
			<Link to='/about'>
				<button >About</button>
			</Link>
		)
	}
}

export default Aboutbutton
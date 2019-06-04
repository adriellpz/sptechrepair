import React from "react"
import './style.css'
import Aboutbutton from "./Aboutbutton";
import Homebutton from "./Homebutton"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Construction from "./Construction"
import About from "./About"


class Header extends React.Component {

	render() {
		return (
			<Router>
				<div className='header'>
				<Link to='/'><Homebutton /></Link>
				<Link to='/about'><Aboutbutton /></Link>
				</div>

				<Route exact path='/' component={Construction} />
				<Route path='/about' component={About} />
			</Router>
		)
	}
}

export default Header
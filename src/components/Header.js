import React from "react"
import './style.css'
import Aboutbutton from "./Aboutbutton";


class Header extends React.Component {

	render() {
		return (
			<div className='header'>
				<ul>
				<li><Aboutbutton /></li>
				</ul>
			</div>
		)
	}
}

export default Header
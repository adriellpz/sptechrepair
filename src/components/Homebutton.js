import React from 'react'

class Aboutbutton extends React.Component {
	constructor() {
        super()
        this.state = {
            view: ' '
        }
        this.handleClick = this.handleClick.bind(this)
    }
	handleClick() {
		this.setState = {
			view: 'about'
		}
	}

	render() {
		return (
				<button onClick={this.handleClick}>About</button>
		)
	}
}

export default Aboutbutton
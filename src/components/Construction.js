import React from 'react'
import Logo from './Logo'
import Message from './Message'

class Construction extends React.Component {
    render() {
        return (
            <div className='mainwrapper'>
                <Logo />
                <Message />
            </div>
        )
    }
}

export default Construction
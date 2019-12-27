import React, { Component } from 'react'
// import { socket } from 'context/socket'



class SocketContainer extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default SocketContainer
import React, { Component } from 'react'

import { socket } from 'context/socket'

class Friend extends Component<any, any> {

    constructor(props: any) {
        super(props)
        console.log(' ss')

        this.state = {
            friends: new Map()
        }

        socket.emit('friend', null, (data: any) => {
            console.log(data, 'friend')
        })
    }

    renderFriendsDom = () => {
        const { friends } = this.state
        return [...friends].map((item, index) => (
            <li key={ index }>
                <span>555</span>
            </li>
        ))
    }

    render() {
        return (
            <section className="friends-container">
                <ul>
                    { this.renderFriendsDom() }
                </ul>
            </section>
        )
    }
}

export default Friend
import React, { Component } from 'react'

import { socket } from 'context/socket'

class Friend extends Component<any, any> {

    constructor(props: any) {
        super(props)
        console.log(' ss')

        this.state = {
            friends: new Set([])
        }

        socket.emit('friend', null, (data: any) => {
            console.log(data, 'friend')
            this.setState({
                friends: new Set(data)
            })
        })
    }

    renderFriendsDom = () => {
        const { friends } = this.state
        return [...friends].map((item: any, index: number) => (
            <li key={ index }>
                <span>{ item.friend_id.nickname }</span>
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
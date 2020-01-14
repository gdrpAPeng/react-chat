import React, { Component } from 'react'
import { socket } from 'context/socket'

import '../css/session.scss'

interface ISessionState {
    sessions: Set<ISession>
}

interface ISession {
    toId: any,
    sessionId: {
        lastFromUserId: {
            nickname: string
        }
        lastMessage: string
    }
}

class Session extends Component<{}, ISessionState> {

    private history: any
    constructor(props: any) {
        super(props)
        const { history } = props
        this.history = history

        this.state = {
            sessions: new Set([])
        } 

        socket.emit('session', null, (data: any) => {
            console.log(data, 'session')
            this.setState({
                sessions: new Set(data)
            })
        })
        
         
    }

    componentDidMount() {
        console.log('session mount')  
    }

    handleClick = (data: any): any => {
        console.log(data, '======')
        const { _id } = data.sessionId
        this.history.push('/chat', {
            sessionId: _id
        })
    }

    renderSessionListDom = () => {
        const { sessions } = this.state
        return [...sessions].map((item, index) => (
            <li key={ index } onClick={() => this.handleClick(item) }>
                <span className="session-name">{ item.toId.nickname }</span>
                <span className="message">{ item.sessionId.lastFromUserId.nickname }:  { item.sessionId.lastMessage }</span>
            </li>
        ))
    }

    render() {
        return (
            <section className="session-list">
                <ul>
                    { this.renderSessionListDom() }
                </ul>
            </section>
        )
    }
}

export default Session
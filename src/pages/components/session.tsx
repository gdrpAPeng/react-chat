import React, { Component } from 'react'
// import { navigate } from '@reach/router'
// import { useHistory } from 'react-router-dom'

import '../css/session.scss'

interface ISessionState {
    sessions: Set<ISession>
}

interface ISession {
    nickname: string
    lastMessage: string
}

class SessionList extends Component<{}, ISessionState> {

    private history: any
    constructor(props: any) {
        super(props)
        const { history } = props
        this.history = history
        
        this.state = {
            sessions: new Set([
                {
                    nickname: 'APeng',
                    lastMessage: '最后一条信息噢'
                }
            ])
        }
    }

    // private history = useHistory()
    handleClick = () => {
        // useHistory().push('/chat')
        this.history.push('/chat')
    }

    renderSessionListDom = () => {
        const { sessions } = this.state
        return [...sessions].map((item, index) => (
            <li key={ index } onClick={ this.handleClick }>
                <span className="session-name">{ item.nickname }</span>
                <span className="message">{ item.lastMessage }</span>
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

export default SessionList
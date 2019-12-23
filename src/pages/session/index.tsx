import React, { Component } from 'react'

import './index.scss'

interface ISessionState {
    sessions: Set<ISession>
}

interface ISession {
    nickname: string
    lastMessage: string
}

class SessionList extends Component<{}, ISessionState> {

    constructor(props: any) {
        super(props)
        this.state = {
            sessions: new Set([
                {
                    nickname: 'APeng',
                    lastMessage: '最后一条信息噢'
                }
            ])
        }
    }

    renderSessionListDom = () => {
        const { sessions } = this.state
        return [...sessions].map((item, index) => (
            <li key={ index }>
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
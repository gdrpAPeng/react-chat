import React from 'react'
import { Component } from "react";
import './index.scss'

interface ChatState {
    value: string,
    messages: Set<object>
}

class ChatPage extends Component<{}, ChatState> {

    constructor(props: any) {
        super(props)

        this.state = {
            value: '',
            messages: new Set([
                {
                    id: 1,
                    message: 'AAAAA'
                },
                {
                    id: 2,
                    message: 'BBBBB'
                },
            ])
        }

        // this.handleSend = this.handleSend.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSend = () => {
        alert(this.state.value)
    }

    handleChange(event: any) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <section className="chat-page">
                <section className="main-container">
                    
                </section>
                <section className="bottom-container">
                    <input type="text" className="chat-input" value={this.state.value} onChange={this.handleChange} />
                    <span className="chat-send" onClick={this.handleSend}>Send</span>
                </section>
            </section>
        )
    }
}

export default ChatPage
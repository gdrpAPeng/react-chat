import React from 'react'
import { Component } from "react";
import './index.scss'

interface ChatState {
    value: string,
    messages: Set<Message>
}

interface Message {
    id: number,
    message: string
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

        // this.getMessagesDom = this.getMessagesDom.bind(this)
    }

    handleSend = () => {
        this.setState({
            messages: this.state.messages.add({
                id: 1,
                message: this.state.value
            }),
            value: ''
        })
    }

    handleChange = (event: any) => {
        this.setState({
            value: event.target.value
        })
    }

    getMessagesDom = () => {
        return ([...this.state.messages].map((item, index) => 
            <p key={index}>{item.message}</p>
        ))
    }

    render() {
        return (
            <section className="chat-page">
                <section className="main-container">
                    {
                        this.getMessagesDom()
                    }
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
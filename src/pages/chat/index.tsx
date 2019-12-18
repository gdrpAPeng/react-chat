import React from 'react'
import { Component } from "react";
import './index.scss'
import io from 'socket.io-client'

interface IChatState {
    value: string,
    messages: Set<IMessage>
}

interface IMessage {
    _id: string,
    userId: string,
    nickname: string,
    message: string
}

class ChatPage extends Component<{}, IChatState> {

    private socket = io('http://localhost:3000')

    constructor(props: any) {
        super(props)
        this.state = {
            value: '',
            messages: new Set()
        }
    }

    componentDidMount() {
       this.socket.on('connect', (e: any) => {
        console.log('connect')
       })
       this.socket.on('disconnect', () => {
           console.log('disconnect')
       })
       this.socket.emit('historyMessages', {
           sessionId: '5df9c6b457818346c04d0d15'
       }, (data: Array<IMessage>) => {
           console.log(data)
        this.setState({
            messages: new Set(data)
        })
       })
    }

    handleSend = () => {
        this.setState({
            // messages: this.state.messages.add({
            //     _id: '1',
            //     message: this.state.value
            // }),
            value: ''
        })
    }

    handleChange = (event: any) => {
        this.setState({
            value: event.target.value
        })
    }

    renderMessagesDom = () => {
        return ([...this.state.messages].map((item, index) => 
            <p key={index}>{item.nickname}: {item.message}</p>
        ))
    }

    render() {
        return (
            <section className="chat-page">
                <section className="main-container">
                    {
                        this.renderMessagesDom()
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
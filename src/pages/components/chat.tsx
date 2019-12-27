import React from "react";
import { Component } from "react";
import "../css/chat.scss";
// import io from "socket.io-client";
// import { SocketContext } from '../../App'
import { SocketContext } from 'context/socket'

interface IChatState {
  value: string;
  messages: Set<IMessage>;
  sessionId: string;
  fromUserId: string;
  toId: string
}

interface IMessage {
  _id: string;
  fromUserId: string;
  toId: string;
  nickname: string;
  message: string;
}


class ChatPage extends Component<{}, IChatState> {
  
  // private socket = io('http://localhost:3000')
  static contextType = SocketContext
  
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      sessionId: "5e042f256bb9fe205c14389b",
      fromUserId: '5e042cecc3f15d41c8f2c4c7',
      toId: '5e042cffc3f15d41c8f2c4c8',
      messages: new Set()
    };
  }

  componentDidMount() {
    // console.log(SocketContext, this.context, '-=-=-')
    console.log(this.context, '==')
    this.context.on("connect", (e: any) => {
      console.log("connect");
      this.context.emit('connection', {
        userId: '5e042cffc3f15d41c8f2c4c8'
      })
    });
    this.context.on("disconnect", () => {
      console.log("disconnect");
    });
    this.context.on("message", (data: any) => {
      this.setState({
        messages: this.state.messages.add(data)
      });
    });

    this.context.emit(
      "historyMessages",
      {
        sessionId: this.state.sessionId
      },
      (data: Array<IMessage>) => {
        this.setState({
          messages: new Set(data)
        });
      }
    );
  }

  handleSend = () => {

    const { value, fromUserId, toId, sessionId } = this.state;
    this.context.emit(
      "message",
      {
        fromUserId,
        toId,
        sessionId,
        message: value
      },
      (result: any) => {
        if(!result) {
            alert('Send Fail')
        }
        this.setState({
          messages: this.state.messages.add(result)
        });
      }
    );
    this.setState({
      value: ""
    });
  };

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  };

  renderMessagesDom = () => {
    return [...this.state.messages].map((item, index) => (
      <p key={index}>
        {item.nickname}: {item.message}
      </p>
    ));
  };

  render() {
    return (
      <section className="chat-page">
        <section className="main-container">{this.renderMessagesDom()}</section>
        <section className="bottom-container">
          <input
            type="text"
            className="chat-input"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span className="chat-send" onClick={this.handleSend}>
            Send
          </span>
        </section>
      </section>
    );
  }
}

export default ChatPage;

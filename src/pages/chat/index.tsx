import React from "react";
import { Component } from "react";
import "./index.scss";
// import io from "socket.io-client";
// import { SocketContext } from '../../App'
import { SocketContext } from '../../context/socket'

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
      sessionId: "5e01c614e6159a1f7c44d6e6",
      fromUserId: '5e01b40c5f28fa22e41c0552',
      toId: '5e01b4695f28fa22e41c0553',
      messages: new Set()
    };
  }

  componentDidMount() {
    // console.log(SocketContext, this.context, '-=-=-')

    this.context.on("connect", (e: any) => {
      console.log("connect");
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
      (result: boolean) => {
        if(!result) {
            alert('Send Fail')
        }
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

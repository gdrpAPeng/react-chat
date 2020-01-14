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
  fromUserId: any;
  toId: any;
  nickname: string;
  message: string;
}


class ChatPage extends Component<{}, IChatState> {
  
  // private socket = io('http://localhost:3000')
  static contextType = SocketContext
  constructor(props: any) {
    super(props);

    const { sessionId } = props.location.state

    console.log(props, 'props')
    this.state = {
      value: "",
      sessionId: sessionId,
      fromUserId: '',
      toId: '',
      messages: new Set()
    };
  }

  componentDidMount() {
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
        console.log(data)
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
        {item.fromUserId.nickname}: {item.message}
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

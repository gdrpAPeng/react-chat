import React, { Component } from "react";
import { socket } from 'context/socket'

import '../css/login.scss'

import { connect } from 'react-redux'
import { setUser, setToken } from 'store/actions'

class Login extends Component<any, any> {
  private history: any
  constructor(props: any) {
    super(props);
    this.history = props.history
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
      console.log('mount', this.props.authState)
  }

  handleInput = (e: any): any => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  };

  loginSubmit = async () => {
    await this.props.setUser({
      _id: '5e042cecc3f15d41c8f2c4c7',
      nickname: '啊Peng',
      username: '啊Peng'
    })
    // localStorage.access_token = '555'
    localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWVilBlbmciLCJzdWIiOiI1ZTA0MmNlY2MzZjE1ZDQxYzhmMmM0YzciLCJpYXQiOjE1NzkxNDc5NzcsImV4cCI6MTU3OTIzNDM3N30.iwxJTVgz4ePEy9U7Zc2VG2XwADTZphq7cYKw5wiqEvo')
    await this.props.setToken(localStorage.access_token)
    // 重新进行 socket 鉴权
    this.socketAuth()

    this.history.replace('/session')
  };

  socketAuth() {
    socket.emit('auth', {
        access_token: 'Bearer ' + localStorage.access_token
    })
  }

  render() {
    return (
      <section className="login-container">
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleInput}
        />
        <input type="button" value="Login" onClick={this.loginSubmit}></input>
        <p>{this.props.token}</p>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
        ...state.auth
    }
}

export default connect(
    mapStateToProps,
    { setUser, setToken }
)(Login);

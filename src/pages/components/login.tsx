import React, { Component } from "react";

import '../css/login.scss'

import { connect } from 'react-redux'
import { setUser } from 'store/actions'

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
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

  loginSubmit = () => {
    console.log(this.state, "login");
    this.props.setUser(this.state)
    console.log(this.props.authState)
  };

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
      </section>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
        authState: state.auth
    }
}

export default connect(
    mapStateToProps,
    { setUser }
)(Login);

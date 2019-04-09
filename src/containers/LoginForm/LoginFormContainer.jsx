import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import axios from "axios";

class LoginFormContainer extends Component {
  state = {
    isLoginSuccess: false,
    disabled: false
  };

  onLogin = (username, password) => {
    this.setState(prevState => ({ disabled: !prevState.disabled }));
    const params = {
      username,
      password,
      response_type: "token",
      redirect_url: "https://www.technovendors.com",
      client_id: "testing"
    };

    axios
      .get(process.env.REACT_APP_API_URL, { params })
      .then(console.log)
      .catch(e => console.error(e.message));
  };

  render() {
    const { disabled } = this.state;

    return <LoginForm onLogin={this.onLogin} disabled={disabled} />;
  }
}

export default LoginFormContainer;

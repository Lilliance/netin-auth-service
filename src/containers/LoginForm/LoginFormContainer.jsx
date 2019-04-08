import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";

class LoginFormContainer extends Component {
  state = {
    isLoginSuccess: false
  };

  onLogin = (login, password) => {
    alert(`You're trying to login as ${login} : ${password}`);
  };

  render() {
    return <LoginForm onLogin={this.onLogin} />;
  }
}

export default LoginFormContainer;

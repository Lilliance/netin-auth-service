import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";

class LoginFormContainer extends Component {
  state = {
    isLoginSuccess: false,
    disabled: false
  };

  onLogin = (login, password) => {
    this.setState(prevState => ({ disabled: !prevState.disabled }));
    alert(`You're trying to login as ${login} : ${password}`);
  };

  render() {
    const { disabled } = this.state;

    return <LoginForm onLogin={this.onLogin} disabled={disabled} />;
  }
}

export default LoginFormContainer;

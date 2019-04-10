import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import axios from "axios";

class LoginFormContainer extends Component {
  state = {
    isLoginSuccess: false,
    disabled: false,
    error: null
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
      .post(process.env.REACT_APP_API_URL, params)
      .then(response => {
        if (!response.data || !response.data.redirect_url) {
          throw new Error("Something went wrong");
        }

        window.location.href = response.data.redirect_url;
      })
      .catch(e => {
        let error = e.message;

        if (
          e.response &&
          e.response.data &&
          e.response.data.error &&
          e.response.data.error.message
        ) {
          error = e.response.data.error.message;
        }

        this.setState({ error, disabled: false });
      });
  };

  render() {
    const { disabled, error } = this.state;

    return (
      <LoginForm onLogin={this.onLogin} disabled={disabled} error={error} />
    );
  }
}

export default LoginFormContainer;

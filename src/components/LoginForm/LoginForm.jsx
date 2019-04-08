import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  InputGroup,
  Intent,
  Tooltip,
  FormGroup,
  Spinner,
  Callout
} from "@blueprintjs/core";

import "./LoginForm.scss";

class LoginForm extends Component {
  state = {
    showPassword: false,
    isLoading: false,
    login: "",
    password: "",
    requires: [],
    error: null
  };

  handleLockClick = () =>
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));

  handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const { onLogin } = this.props;
    const { login, password } = this.state;

    if (!login || !password) {
      let requires = [];

      if (!login) requires.push("login");
      if (!password) requires.push("password");

      this.setState({
        error: "Please, fill all required fields",
        requires
      });

      return;
    }

    this.setState({ isLoading: true });

    onLogin(login, password);
  };

  handleChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleBlur = fieldName => event => {
    const value = event.target.value;
    const { requires } = this.state;

    const valueNotEmpty = value && value.length > 0;
    const alreadyInRequires = requires.includes(fieldName);

    if (valueNotEmpty && alreadyInRequires) {
      const newRequires = requires.filter(
        requiredFieldName => requiredFieldName !== fieldName
      );

      let newState = { requires: newRequires };

      if (newRequires.length === 0) {
        newState.error = null;
      }

      setTimeout(() => this.setState(newState), 100);
    }

    if (valueNotEmpty || alreadyInRequires) {
      return false;
    }

    this.setState({ requires: [...requires, fieldName] });
  };

  render() {
    const {
      showPassword,
      isLoading,
      login,
      password,
      error,
      requires
    } = this.state;

    const lockButton = (
      <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`}>
        <Button
          icon={showPassword ? "unlock" : "lock"}
          intent={Intent.WARNING}
          minimal={true}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    );

    return (
      <form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <InputGroup
            id="login"
            name="login"
            placeholder="Enter your login"
            ref="login"
            onBlur={this.handleBlur("login")}
            onChange={this.handleChange("login")}
            required
            value={login}
            intent={requires.includes("login") ? Intent.DANGER : Intent.NONE}
            large
            round
          />
          <InputGroup
            id="password"
            name="password"
            placeholder="Enter your password"
            rightElement={lockButton}
            type={showPassword ? "text" : "password"}
            ref="password"
            onBlur={this.handleBlur("password")}
            onChange={this.handleChange("password")}
            required
            intent={requires.includes("password") ? Intent.DANGER : Intent.NONE}
            value={password}
            large
            round
          />
          {error && (
            <Callout icon="error" intent={Intent.DANGER}>
              {error}
            </Callout>
          )}
          <Button style={{ borderRadius: "50px" }} type="submit" small>
            {isLoading ? (
              <Spinner size={15} intent={Intent.WARNING} />
            ) : (
              "Login"
            )}
          </Button>
        </FormGroup>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;

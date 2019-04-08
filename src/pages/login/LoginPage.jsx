import React, { useState, useEffect } from "react";
import "./LoginPage.scss";
import LoginForm from "../../containers/LoginForm";
import styled from "styled-components";

const LoginPageWrapper = styled.div(({ height }) => ({
  height: height //|| document.documentElement.clientHeight
}));

const LoginPage = () => {
  const [height, setHeight] = useState(document.documentElement.clientHeight);

  useEffect(() => {
    const setNewHeight = () => setHeight(document.documentElement.clientHeight);

    window.addEventListener("resize", setNewHeight);

    return () => window.removeEventListener("resize", setNewHeight);
  });

  return (
    <LoginPageWrapper className="login-page" height={height}>
      <div className="login-page--col login-page--form">
        <div className="login-page--form-container">
          <h1>Login to our amazing web services</h1>
          <p>Once you have logged you can access any of our web-services.</p>
          <LoginForm />
        </div>
      </div>
      <div className="login-page--col login-page--static-info" />
    </LoginPageWrapper>
  );
};

export default LoginPage;

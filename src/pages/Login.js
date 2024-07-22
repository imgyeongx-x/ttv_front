import React from "react";
import Header from "../components/common/Header";
import { LoginForm } from "../components/login/LoginForm";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <Header />
      <MainDiv>
        <LoginForm />
      </MainDiv>
    </div>
  );
};

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Login;

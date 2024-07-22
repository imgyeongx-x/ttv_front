import React from "react";
import Header from "../components/common/Header";
import { SignupForm } from "../components/signup/SignupForm";
import styled from "styled-components";

const Signup = () => {
  return (
    <div>
      <Header />
      <MainDiv>
        <SignupForm />
      </MainDiv>
    </div>
  );
};

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Signup;

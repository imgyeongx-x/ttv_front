import React from "react";
import Header from "../components/common/Header";
import styled from "styled-components";

const Download = () => {
  return (
    <AdDiv>
      <Header />
      <Text>다운로드 중...</Text>
      <AD>
        .<br />. .<br />. .<br />. .<br />. .<br />. .<br />. .<br />. .<br />.
        .<br />. .<br />. .<br />. .<br />. .<br />. .<br />
      </AD>
    </AdDiv>
  );
};

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AD = styled.div`
  background-color: gray;
  width: 550px;
  heignt: 200px;
  color: gray;
  margin: 30px;
`;

export default Download;

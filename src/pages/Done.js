import React from "react";
import Header from "../components/common/Header";
import styled from "styled-components";

const Done = () => {
  return (
    <div>
      <Header />
      <Text>다운로드가 완료되었습니다.</Text>
    </div>
  );
};

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Done;

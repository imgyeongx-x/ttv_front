import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import styled from "styled-components";

const Done = () => {
  const location = useLocation();
  const { state } = location;

  // 상태에서 videoUrl과 error를 추출
  const videoUrl = state?.videoUrl;
  const error = state?.error;

  return (
    <div>
      <Header />
      <Content>
        <Text>다운로드가 완료되었습니다.</Text>
        {videoUrl && (
          <div>
            <h2>Generated Video:</h2>
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </Content>
    </div>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 20px;
`;

export default Done;

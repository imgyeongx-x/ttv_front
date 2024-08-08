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
            <Video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
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

const Video = styled.video`
  width: 100%; /* 비디오의 너비를 화면의 80%로 설정 */
  max-width: 800px; /* 비디오의 최대 너비를 800px로 설정 */
  height: auto; /* 비디오의 높이는 자동 조정 */
  margin-top: 10px;
`;

export default Done;

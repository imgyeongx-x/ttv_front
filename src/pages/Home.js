import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { MarkdownEditor } from "../components/MarkdownEditor";
import styled from "styled-components";
import axios from "axios";
import DownloadVideo from "../components/DownloadVideo";

const Home = () => {
  const [markdown, setMarkdown] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchVideo = async () => {
    setLoading(true);
    try {
      console.log(markdown);
      const response = await axios.post(
        "http://61.254.228.107:1207/markdown",
        { requestData: markdown }, // 서버가 기대하는 데이터 형식
        {
          responseType: "blob", // 서버가 비디오 파일을 Blob 형식으로 반환한다고 가정
          headers: {
            "Content-Type": "text/plain", // 요청 데이터 형식
          },
        }
      );
      const videoBlob = new Blob([response.data], { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl);
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <HomeDiv>
        <Title>[ 마크다운 작성 ]</Title>
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        <Button onClick={handleFetchVideo} disabled={loading}>
          {loading ? "Loading..." : "비디오 만들기"}
        </Button>
        {videoUrl && (
          <video controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <DownloadVideo markdown={markdown} />
      </HomeDiv>
      <Footer />
    </div>
  );
};

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 50px 0px;
  background-color: #241468;
  border: 0;
  border-radius: 10px;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: #5a4e7f;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export default Home;

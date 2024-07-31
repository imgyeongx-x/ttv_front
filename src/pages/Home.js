import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { MarkdownEditor } from "../components/MarkdownEditor";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [markdown, setMarkdown] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFetchVideo = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://61.254.228.107:1207/markdown`,
        markdown,
        {
          responseType: "blob", // 영상 데이터를 받아올 때 사용
        }
      );

      const url = URL.createObjectURL(new Blob([response.data]));
      setVideoUrl(url);
      setLoading(false);

      navigate("/done", {
        state: { videoUrl: url, error: error },
      });
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Error response:", error.response.data);
        setError(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        setError("Error: No response received from server");
      } else {
        console.error("Error message:", error.message);
        setError(`Error: ${error.message}`);
      }
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
      </HomeDiv>

      {error && <div style={{ color: "red" }}>{error}</div>}
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

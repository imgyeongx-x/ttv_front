import React, { useState } from "react";

const DownloadVideo = ({ markdown }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // 오류 메시지 상태 추가

  const handleFetchVideo = async () => {
    setLoading(true);
    setError(""); // 오류 초기화

    try {
      const response = await fetch("http://61.254.228.107:1207/markdown", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain", // 요청 데이터의 형식
        },
        body: markdown, // 요청 본문에 마크다운 데이터 포함
      });

      if (!response.ok) {
        // HTTP 오류 처리
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob(); // 응답을 Blob으로 변환
      const url = window.URL.createObjectURL(blob); // Blob URL 생성
      const link = document.createElement("a");

      link.setAttribute("href", url);
      link.setAttribute("download", "video.mp4"); // 다운로드할 파일 이름

      document.body.appendChild(link);
      link.click(); // 링크 클릭하여 다운로드 시작
      link.parentNode.removeChild(link); // 링크 요소 제거

      window.URL.revokeObjectURL(url); // Blob URL 메모리에서 해제
    } catch (error) {
      console.error("Error fetching video:", error);
      setError(error.message); // 오류 메시지 상태 업데이트
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleFetchVideo} disabled={loading}>
        {loading ? "Loading..." : "Generate Video"}
      </button>
      {error && <p>Error: {error}</p>} {/* 오류 메시지 표시 */}
    </div>
  );
};

export default DownloadVideo;

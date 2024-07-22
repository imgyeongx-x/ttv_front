import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <MarkdownEditorDiv>
      <MarkDownArea>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </MarkDownArea>
      <FaExchangeAlt />
      <TextArea>
        <TextareaAutosize
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="마크다운 언어를 입력해주세요!"
        />
      </TextArea>
    </MarkdownEditorDiv>
  );
};

const MarkdownEditorDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 0px 50px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    margin: 10px;
  }
`;

const TextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  textarea {
    font-family: "IBM Plex Sans KR", sans-serif;
    border: 0;
    padding: 10px;
    flex-grow: 1;
    background-color: #24146830;
    font-size: 18px;
    resize: none; /* Prevents manual resizing */
    overflow: auto; /* Allows scroll when content overflows */
  }
`;

const MarkDownArea = styled.div`
  flex: 1;
  background-color: #24146810;
  padding: 10px;
  text-align: left;
  overflow: auto; /* Ensures the Markdown preview area is scrollable */
  position: relative;
  height: 100%;
  p {
    margin: 0px;
    font-size: 18px;
  }
`;

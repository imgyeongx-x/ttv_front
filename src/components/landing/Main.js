import React from "react";
import styled from "styled-components";
import { MdOutlineChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <Title>텍스트를 비디오로 바꿔보세요!</Title>
        <SubTile>
          텍스트를 비디오로 바꾸어 드립니다!!!!!!!!!!!!
          <br /> 사진과 텍스트 등을 포함한 마크다운 언어로 작성된 글을 영상으로
          바꾸어 보세요. 글을 자막으로 변환해 드립니다.
          <br />
          변환된 영상을 유튜브나 인스타그램에 게시해 보세용 ~
        </SubTile>
        <ButtonDiv>
          <Button>
            <StyledLink to="/home">비디오로 바꾸러가깅 ~</StyledLink>
          </Button>
        </ButtonDiv>
      </LeftDiv>
      <RightDiv>
        <AnimationDiv></AnimationDiv>
      </RightDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 30px 50px;
`;

const LeftDiv = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightDiv = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
`;
const AnimationDiv = styled.div`
  background-color: #f0eeed;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  display: inline;
  box-shadow: inset 0 -30px 0 #17153b15;
  width: 500px;
`;

const SubTile = styled.div`
  font-weight: 100;
  font-size: 20px;
  padding: 20px 0px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 50px 0px;
  background-color: #01204e;
  border: 0;
  border-radius: 10px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: #5a4e7f;
  }
`;

const StyledLink = styled(Link)`
  color: inherit; // Inherit color from the Button
  text-decoration: none; // Remove underline
`;

export default Main;

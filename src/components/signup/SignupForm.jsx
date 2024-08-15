import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangePwCheck = (e) => {
    setPwCheck(e.target.value);
  };

  const baseUrl = "https://localhost:8080/";

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + "/signup/success", {
        name: name,
        id: id,
        password: pw,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form>
      <Title>
        <p>회원가입</p>
      </Title>
      <Group>
        <Label>이름</Label>
        <InputDiv value={name} onChange={onChangeName} placeholder="이름" />
      </Group>
      <Group>
        <Label>아이디</Label>
        <InputDiv
          className="withButton"
          value={id}
          onChange={onChangeId}
          placeholder="아이디를 입력하세요"
        />
        <SmallButton>중복확인</SmallButton>
      </Group>
      <Group>
        <Label>비밀번호</Label>
        <InputDiv
          value={pw}
          onChange={onChangePw}
          placeholder="비밀번호를 입력하세요"
          type="password"
        />
      </Group>
      <Group>
        <Label>비밀번호 확인</Label>
        <InputDiv
          value={pwCheck}
          onChange={onChangePwCheck}
          placeholder="비밀번호를 한번 더 입력하세요"
          type="password"
        />
      </Group>
      <Button onClick={onSubmit}>회원가입</Button>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #17153b15;
  width: 450px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 25px;
  text-align: center;
  font-weight: bold;
`;

const Group = styled.div`
  margin: 5px;
  .withButton {
    width: 220px;
  }
`;

const Label = styled.div`
  margin: 3px;
`;

const InputDiv = styled.input`
  width: 300px;
  border: 0px;
  height: 36px;
  padding: 10px;
  font-family: "IBM Plex Sans KR", sans-serif;
`;

const Button = styled.button`
  width: 100px;
  margin: 30px 0px 30px 0px;
  height: 35px;
  background-color: #241468;
  border: 0;
  border-radius: 10px;
  font-family: "IBM Plex Sans KR", sans-serif;
  color: white;
`;

const SmallButton = styled.button`
  width: 68px;
  height: 35px;
  margin: 0px 0px 0px 10px;
  background-color: #241468;
  border: 0;
  border-radius: 10px;
  font-family: "IBM Plex Sans KR", sans-serif;
  color: white;
`;

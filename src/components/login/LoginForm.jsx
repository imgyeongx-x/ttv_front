import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const baseUrl = "http://localhost:8080/";

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post(
        baseUrl + "login/success",
        {
          userId: id,
          password: pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      // Redirect or show success message here
    } catch (err) {
      setError("로그인 실패했습니다. 다시 시도해주세요.");
      console.log(err);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>
        <p>로그인</p>
      </Title>
      <Group>
        <Label>아이디</Label>
        <InputDiv
          value={id}
          onChange={onChangeId}
          placeholder="아이디를 입력하세요"
        />
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
      {error && <ErrorText>{error}</ErrorText>}
      <Button type="submit">로그인</Button>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #17153b15;
  width: 450px;
  height: 400px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 35px;
  text-align: center;
  font-weight: bold;
`;

const Group = styled.div`
  margin: 10px;
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
  margin: 50px;
  height: 30px;
  background-color: #241468;
  border: 0;
  border-radius: 10px;
  font-family: "IBM Plex Sans KR", sans-serif;
  color: white;
`;

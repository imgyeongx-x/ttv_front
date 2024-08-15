import React from "react";
import styled from "styled-components";

export const DropdownForm = ({
  size,
  setSize,
  type,
  setType,
  velocity,
  setVelocity,
  font,
  setFont,
  color,
  setColor,
  fontSize,
  setFontSize,
}) => {
  return (
    <DropDownForm>
      <Title>[ Setting ]</Title>

      <SelectDiv>
        <SelectWrapper>
          <Label>Size</Label>
          <Select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>Type</Label>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>Font</Label>
          <Select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Courier">Courier</option>
            <option value="Georgia">Georgia</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>Velocity</Label>
          <Select
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
          >
            <option value="v00">0</option>
            <option value="v05">0.5</option>
            <option value="v10">1</option>
            <option value="v15">1.5</option>
            <option value="v20">2.0</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>Color</Label>
          <Select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>Font Size</Label>
          <Select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
          </Select>
        </SelectWrapper>
      </SelectDiv>
    </DropDownForm>
  );
};

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 30px;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #24146810;
  border-radius: 15px;
  padding: 5px;
`;

const DropDownForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px;
  font-family: "Gowun Dodum", sans-serif;
`;

const SelectWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
  font-family: "Gowun Dodum", sans-serif;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #555;
    outline: none;
  }
`;

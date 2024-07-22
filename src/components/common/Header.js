import React from "react";
import styled from "styled-components";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderDiv>
      <StyledMainLink to="/">
        <FaVideo size={25} />
        TTV
      </StyledMainLink>
      {/* login 안되어 있을 경우 */}
      <Bar>
        <StyledSubLink to="/login">login</StyledSubLink>
        <StyledSubLink to="/signup">signup</StyledSubLink>
      </Bar>
      {/* login 되어 있을 경우 */}
      {/* <Bar>
        <StyledSubLink to="/">storage</StyledSubLink>
        <StyledSubLink to="/">mypage</StyledSubLink>
        <StyledSubLink to="/">logout</StyledSubLink>
      </Bar> */}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  width: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  padding: 30px 0px 30px 60px;
  font-weight: bold;
  position: relative;

  svg {
    color: #17153b;
    margin-right: 8px;
  }
`;

const StyledMainLink = styled(Link)`
  color: inherit; // Inherit color from the Button
  text-decoration: none; // Remove underline
`;

const StyledSubLink = styled(Link)`
  color: inherit; // Inherit color from the Button
  text-decoration: none; // Remove underline
  margin: 10px;
  font-size: 18px;
`;

const Bar = styled.div`
  position: absolute;
  right: 100px;
`;

export default Header;

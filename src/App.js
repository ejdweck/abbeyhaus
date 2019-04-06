import React, { Component } from "react";

import logo from "./logo.svg";
import fridge from "./fridge.svg";
import washer from "./washer.svg";
import trash from "./trash.svg";
import kitchen from "./kitchen.svg";
import key from "./key.svg";

import "./App.css";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCol = styled.div`
  flex-direction: col;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const StyledImgContainer = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const StyledTitleBlue = styled.h5`
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00b2ff, 0 0 30px #00b2ff,
    0 0 40px #00b2ff, 0 0 55px #00b2ff, 0 0 75px #00b2ff;
  text-align: center;
  margin-top: 0px;
`;

const StyledTitlePink = styled.h5`
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff6bb9, 0 0 30px #ff6bb9,
    0 0 40px #ff6bb9, 0 0 55px #ff6bb9, 0 0 75px #ff6bb9;
  text-align: center;
  margin-top: 0px;
`;

const StyledTitleGreen = styled.h5`
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #54f200, 0 0 30px #54f200,
    0 0 40px #54f200, 0 0 55px #54f200, 0 0 75px #54f200;
  text-align: center;
  margin-top: 0px;
`;

const StyledTitleYellow = styled.h5`
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff200, 0 0 30px #fff200,
    0 0 40px #fff200, 0 0 55px #fff200, 0 0 75px #fff200;
  text-align: center;
  margin-top: 0px;
`;

const StyledTitlePurple = styled.h5`
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #a20cff, 0 0 30px #a20cff,
    0 0 40px #a20cff, 0 0 55px #a20cff, 0 0 75px #a20cff;
  text-align: center;
  margin-top: 0px;
`;

const StyledHeadline = styled.h3`
  margin-top: 0px;
  padding-top: 100px;
  padding-bottom: 0px;
  font-size: 80px;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff355e, 0 0 30px #ff355e,
    0 0 40px #ff355e, 0 0 55px #ff355e, 0 0 75px #ff355e;
  text-align: center;
`;

const StyledText = styled.span`
  font-size: 20px;
`;

const StyledBackground = styled.div`
  background-color: #333333;
  min-height: 100vh;
  margin: 0 auto;
  font-size: calc(10px + 2vmin);
  color: white;
  align-items: center;
`;

const Grid = styled.div`
  margin: 0 auto;
  padding-top: 0px;
  padding-bottom: 80px;
  padding-left: 80px;
  padding-right: 80px;
  align-text: center;
  align-content: center;
  align-self: center;
`;

const text =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

class App extends Component {
  state = {
    enter: false
  };

  render() {
    return (
      <StyledBackground>
        <StyledHeadline>Abbey Haus</StyledHeadline>
        <Grid>
          <StyledRow>
            <StyledImgContainer>
              <StyledImg src={kitchen} alt="logo" />
            </StyledImgContainer>
            <StyledCol>
              <StyledTitlePink>Kitchen</StyledTitlePink>
              <StyledText>{text}</StyledText>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledImgContainer>
              <StyledImg src={fridge} alt="logo" />
            </StyledImgContainer>
            <StyledCol>
              <StyledTitlePurple>Fridge</StyledTitlePurple>
              <StyledText>{text}</StyledText>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledImgContainer>
              <StyledImg src={washer} alt="logo" />
            </StyledImgContainer>
            <StyledCol>
              <StyledTitleBlue>Washer & Dryer</StyledTitleBlue>
              <StyledText>{text}</StyledText>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledImgContainer>
              <StyledImg src={trash} alt="logo" />
            </StyledImgContainer>
            <StyledCol>
              <StyledTitleGreen>Trash & Recycle-ables</StyledTitleGreen>
              <StyledText>{text}</StyledText>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledImgContainer>
              <StyledImg src={key} alt="logo" />
            </StyledImgContainer>
            <StyledCol>
              <StyledTitleYellow>Key</StyledTitleYellow>
              <StyledText>{text}</StyledText>
            </StyledCol>
          </StyledRow>
        </Grid>
      </StyledBackground>
    );
  }
}

export default App;

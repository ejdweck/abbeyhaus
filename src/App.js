import React, { Component } from 'react';

import logo from './logo.svg';
import fridge from './fridge.svg';
import washer from './washer.svg';
import trash from './trash.svg';
import kitchen from './kitchen.svg';
import key from './key.svg';

import './App.css';
import styled from 'styled-components'

import Input from './components/Input'

const StyledContainer = styled.div`
  background-color: #474a52;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Button = styled.button`
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  background: transparent;
  
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  
  cursor: pointer;
`

const StyledRow = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledAnimationImg = styled.img`
  animation: shake infinite 2s linear;
  width: 50%;
  margin-top: 0px;
  pointer-events: none;
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`

const StyledImg = styled.img`
  width: 20%;
`

const StyledBigImg = styled.img`
  width: 30%;
`

class App extends Component {
  state = {
    enter: false
  }

  render() {
    return (
      <StyledContainer>
        { 
          this.state.enter 
        ?
          <React.Fragment>
            <StyledBigImg src={logo} alt="logo" />
            <p>Me Thinks we should put some /Content Here</p>
            <StyledRow >
              <StyledImg src={kitchen} alt="logo" />
              <StyledImg src={fridge} alt="logo" />
              <StyledImg src={washer} alt="logo" />
              <StyledImg src={trash} alt="logo" />
              <StyledImg src={key} alt="logo" />
            </StyledRow>
          </React.Fragment>
        : 
          <React.Fragment>
            <Button onClick={()=>this.setState({enter:true})}>
              Enter If You Dare
            </Button>
            <StyledAnimationImg src={logo} alt="logo" />
          </React.Fragment> 
        }
      </StyledContainer>
    );
  }
}

export default App;

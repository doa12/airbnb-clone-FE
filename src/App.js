import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './redux/modules/userSlice';
import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header/>
      <Content>
        dddddfdsafd
      </Content>
    </div>
  );
}

export default App;


const Content = styled.div`
  width:90%;
  background:yellow;
  margin: 0 auto;
  padding-top:80px;
`

const Header = styled.div`
  position:fixed;
  width:100%;
  top:0;
  left:0;
  height:70px;
  background:green;
`



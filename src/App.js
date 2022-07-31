import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './redux/modules/userSlice';
import styled, { ThemeProvider} from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import Home from './pages/Home';
import MainHeader from './components/header/MainHeader';
import SubHeader from './components/header/SubHeader';
import theme from './style/theme';
import Filter from './pages/Filter';
import Detail from './pages/Detail';
const App = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <MainHeader/>
      <SubHeader setIsFilter={setIsFilter}/>
      {isFilter?<Filter setIsFilter={setIsFilter}/>:null}
      <Content>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}></Route>
        </Routes>
      </Content>
    </div>
    </ThemeProvider>
  );
}

export default App;


const Content = styled.div`
  width:90%;
  /* background:yellow; */
  margin: 0 auto;
  padding-top:170px;
`



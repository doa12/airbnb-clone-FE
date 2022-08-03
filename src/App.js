import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './redux/modules/userSlice';
import styled, { ThemeProvider} from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

import Home from './pages/Home';
import WishList from './pages/WishList';
import HostPosting from './pages/HostPosting';
import Book from './pages/Book';
// import Home from './pages/WishList';
// WishList를 보고 싶으면 위의 주석을 풀고 이 문단의 첫 번째 코드를 주석처리하세요.
// Book페이지를 보고 싶으면 아래의 주석을 풀고 이 문단의 첫 번째 코드를 주석처리하세요.
// import Home from './pages/Book';

// import Home from './pages/HostPosting'
// 호스트페이지를 보고 싶으면 위의 주석을 풀어주세요.

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

      {/* <TestWish>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> 
      </TestWish>  */}
      {/* WishList/Book/HostPosting을 보고 싶으면 위의 주석을 풀고 아래 문단의 코드를 주석처리하세요. */}

      <SubHeader setIsFilter={setIsFilter}/>
      {isFilter?<Filter setIsFilter={setIsFilter}/>:null}
      <Content>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}></Route>
          <Route path='/wishList' element={<WishList></WishList>}/>
          <Route path='/hostPosting' element={<HostPosting></HostPosting>}/>
          <Route path='/book' element={<Book></Book>}/>
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
  padding-top:85px;
`

// WishList/Book/HostPosting을 보고 싶으면 아래의 주석을 풀고 위 문단의 코드를 주석처리하세요.

// const TestWish = styled.div`
//   width:90%;
//   /* background:yellow; */
//   margin: 0 auto;
//   padding-top:100px;
// `

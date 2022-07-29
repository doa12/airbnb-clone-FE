import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './redux/modules/userSlice';
import styled from 'styled-components';

function App() {
  const tempState = useSelector(state => state.user.isAppend);
  const dispatch = useDispatch();
  console.log(tempState);

  const tempclickhandler = () => {
    dispatch(userActions.toggleIsAppend());
  }

  useEffect(()=> {
    console.log(tempState);
  }, [tempState])

  return (
    <div className="App">
      <button onClick={tempclickhandler}>toggle</button>
      <TempDiv>
        <TemptempDiv isShow={tempState === true? true:false}></TemptempDiv>
      </TempDiv>
    </div>
  );
}

export default App;

const TempDiv = styled.div`
  display:${props=>props.isShow === true ? 'flex':'none'};
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  color:blue;
  background:yellow;
`

const TemptempDiv = styled.div`
  width:300px;
  height:500px;
  background:white;
`

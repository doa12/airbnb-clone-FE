import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { userActions } from '../../redux/modules/userSlice';


function Login() {
  const dispatch = useDispatch();

  const onClickLogoutButton = () => {
    localStorage.removeItem("Authorization");
    dispatch(userActions.deleteUserInfo());
    window.location.replace('/');
  }

  // 모달을 띄우면 subheader(red div) 오른쪽이 살짝 늘어나는데 혹시 해결방법이 있을까요?
  // P의 padding 탓은 아닌 것을 확인했습니다.
  return (
    <>
    <P onClick={onClickLogoutButton}>로그아웃</P>
    </>
  )
}

export default Login

const P = styled.p`
cursor : pointer;
:hover{
  background-color : #f7f7f7;
  border-radius : 20px;
}
`
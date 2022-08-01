import React, { useState } from 'react';
// import { deleteCookie } from "../../shared/Cookie";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField } from '@mui/material';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 모달을 띄우면 subheader(red div) 오른쪽이 살짝 늘어나는데 혹시 해결방법이 있을까요?
  // P의 padding 탓은 아닌 것을 확인했습니다.
  return (
    <>
      {/* <P onClick={()=>{
        deleteCookie("Authorization");
      }}>로그아웃</P> */}
    <P onClick={handleOpen}>로그아웃</P>
      <Dialog open={open} onClose={handleClose}>
          <PP>로그아웃</PP>
          <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={20} fontWeight={"bolder"}>
          로그아웃하시겠습니까?
        </DialogTitle>          
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={
            () => {
                navigate.push("/");
            }}>완료</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Login

const P = styled.p`
cursor : pointer;
:hover{
  background-color : #f7f7f7;
  border-radius : 20px;
}
`

const PP = styled.p`
display : flex;
align-items : center;
justify-content : center;
padding : 15px;
font-size : 15px;
font-weight : bolder;

`

const Br = styled.div`
margin-bottom : 10px;
`
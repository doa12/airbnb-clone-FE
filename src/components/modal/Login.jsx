import React, { useState } from 'react';
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
    <P onClick={handleOpen}>로그인</P>
      <Dialog open={open} onClose={handleClose}>
          <PP>로그인</PP>
          <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={20} fontWeight={"bolder"}>
          에어비앤비에 오신 것을 환영합니다.
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
          />
          <Br/>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={
            () => {
                navigate.push("/login");
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
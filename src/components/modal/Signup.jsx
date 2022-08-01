import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField } from '@mui/material';


function Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
       <P onClick={handleOpen}>회원가입</P>
      <Dialog open={open} onClose={handleClose}>
          <PP>회원가입</PP>
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
        <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Check Password"
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
                navigate.push("/signup");
            }}>완료</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Signup

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
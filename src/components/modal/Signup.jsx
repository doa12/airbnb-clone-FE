import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField } from '@mui/material';


function Signup() {
// 여기서부터 새로 추가된 코드입니다.

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");

  const onUserNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onCheckPasswordHandler = (event) => {
    setCheckPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== CheckPassword) {
      return alert("비밀번호가 다릅니다.");
    }

    let body = {
      username: UserName,
      password: Password,
      checkpassword: CheckPassword
    };

    Signup(body);
  };

  const Signup = async (body) => {
    try {
      let data = {
        username: body.username,
        password: body.password,
        checkpassword: body.checkpassword
      };
      // console.log(data);
      const res = await axios.post(`http://ip/api/signup`, data);
      window.alert("회원가입 성공! 이제 여행을 떠나볼까요?");
      navigate.push("/");
    } catch (err) {
      window.alert("회원정보를 다시 확인해주세요!");
    }
  };
  
  // 이 위로가 새로 추가한 코드입니다.

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
      <Dialog open={open} onClose={handleClose} >
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
            value={UserName}
            onChange={onUserNameHandler}
          />
        <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={Password}
            onChange={onPasswordHandler}
          />
        <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Check Password"
            type="password"
            fullWidth
            variant="standard"
            value={CheckPassword}
            onChange={onCheckPasswordHandler}
          />
          <Br/>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onSubmitHandler}>완료</Button>
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
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField } from '@mui/material';


function Login() {
// 여기서부터 새로 추가된 코드입니다.

  const LOAD = "userSlice/LOAD"

  const initialState = {
    isAuth : false,
    token : "",
  }

  function loadUser(userList) {
    console.log("유저를 로딩합니다.")
    return {type : loadUser, userList}
  }
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const onUserNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("UserName", UserName);
    console.log("Password", Password);

    let body = {
      username: UserName,
      password: Password,
    };

    Login(body);
  };

  const Login = async (body) => {
    try {
      let data = {
        username: body.username,
        password: body.password,
      };
            
      const res = await axios.post(`http://ip/api/login`, data);
      // console.log(res);
      // console.log(res.headers.authorization);

      dispatch(loadUser(res.headers.authorization));
      // const token = res.headers.authorization;
      // setCookie(token);
      window.alert("이번엔 어디로 떠나볼까요?");
      navigate.push("/");
    } catch (err) {
      window.alert("로그인 실패!");
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

  // 모달을 띄우면 subheader(red div) 오른쪽이 살짝 늘어나는데 혹시 해결방법이 있을까요?
  // P의 padding 탓은 아닌 것을 확인했습니다.
  return (
    <>
    <P onClick={handleOpen}>로그인</P>
      <Dialog open={open} onClose={handleClose} maxWidth>
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
import React, { useState } from 'react';
import instance from '../../shared/axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField } from '@mui/material';
import { userActions } from '../../redux/modules/userSlice';


function Login() {

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onUserNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler =  async () => {
    let body = {
      username: UserName,
      password: Password,
    };

    const loginRes = await instance.post('/api/login', body).catch((e) => {
      alert('로그인에 실패하였습니다.');
    });
    
  
    localStorage.setItem('Authorization', loginRes.headers.authorization);
    const res = await instance.post('/api/info').catch((e) => {
      alert('유저 정보 가져오기 실패');
    })
    const data = res.data;
    dispatch(userActions.setUserInfo({username:data.username, isHost:data.host}));
    alert('로그인 성공');

    handleClose();
    window.location.replace('/');

  };

  

  // 모달을 띄우면 subheader(red div) 오른쪽이 살짝 늘어나는데 혹시 해결방법이 있을까요?
  // P의 padding 탓은 아닌 것을 확인했습니다.
  return (
    <>
    <P onClick={handleOpen}>로그인</P>
      <Dialog open={open} onClose={handleClose} >
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
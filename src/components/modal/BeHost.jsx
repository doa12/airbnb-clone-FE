import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Box, Button, TextField, Checkbox, Slider,
FormGroup, FormControl, FormControlLabel } from '@mui/material';
import { MdSupervisedUserCircle } from 'react-icons/md';
import instance from '../../shared/axios';



function BeHost() {
  const isHost = useSelector(state => state.user.userInfo.isHost);
  const onSubmitHandler =  async () => {
    const res = await instance.post(`/api/host/register`);
    const data = res.data;
    if(data.status === 200) {
      alert(data.message);
    }
    else if(data.status === 500) {
      alert(data.message);
    }
    handleClose();
    window.location.reload();
    
    
  }
    
// 이 위로가 새로 추가한 코드입니다.
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <Wrap style={{display:isHost&&'none'}}>
      <MdSupervisedUserCircle fontSize={"25"}/>
      <P onClick={handleOpen}>호스트 되기</P>
      </Wrap>
      <Dialog  onSubmit={onSubmitHandler} open={open} onClose={handleClose}>
          <PP>호스트 신청</PP>
          <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={"20"} fontWeight={"bold"}>
          호스트 유저로 전환하시겠습니까?
        </DialogTitle>
        <DialogContent>
        <DialogContentText>
          <p>호스트가 되어도 기존의 서비스는 이용하실 수 있습니다.</p>
        </DialogContentText>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onSubmitHandler}>신청</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BeHost

const Wrap = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex-direction : row;
padding : 7px 10px;
:hover{
  background-color : #f7f7f7;
  // background-color : #FFFAFF;
  border-radius : 5px;
}
`

const P = styled.p`
cursor : pointer;
padding-left : 5px;
`

const PP = styled.p`
display : flex;
align-items : center;
justify-content : center;
padding : 15px;
font-size : 15px;
font-weight : bolder;
`
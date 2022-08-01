import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField } from '@mui/material';

function WishList() {
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
    
    </>
    )
}

export default WishList;

const P = styled.p`
cursor : pointer;
:hover{
  background-color : #f7f7f7;
  border-radius : 20px;
}
`
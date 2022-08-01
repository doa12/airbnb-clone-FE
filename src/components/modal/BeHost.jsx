import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Box, Button, TextField, Checkbox, Slider,
FormGroup, FormControlLabel } from '@mui/material';
import { MdSupervisedUserCircle } from 'react-icons/md';


function BeHost() {
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
      <Wrap>
      <MdSupervisedUserCircle fontSize={25}/>
      <P onClick={handleOpen}>호스트 되기</P>
      </Wrap>
      <Dialog open={open} onClose={handleClose}>
          <PP>호스트 유저로 전환 신청</PP>
          <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={20} fontWeight={"bolder"}>
          아래의 양식을 모두 채워주세요.
        </DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Room Type : 아파트/오피스텔/단독주택"
            type="text"
            fullWidth
            variant="standard"
        />
          <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Room Name : 상호명/건물명"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Room Address : 주소"
            type="text"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            fontWeight="bolder"
            margin="dense"
            label="Available Date : 22.07.31~22.08.02 이용가능"
            type="text"
            // type="date"
            fullWidth
            variant="standard"
          />
        <FormGroup>
            <Opt>
            <p>Max Guest</p>
            <Box width={300}>
              <Slider defaultValue={2} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
            </Opt>
        </FormGroup>
        <FormGroup>
            <Opt>
            <p>Option</p>
            <OptCheck>
            <FormControlLabel control={<Checkbox />} label="주차장" />
            <FormControlLabel control={<Checkbox />} label="실내취사" />
            <FormControlLabel control={<Checkbox />} label="Wifi" />
            <FormControlLabel control={<Checkbox />} label="에어컨" />
            <FormControlLabel control={<Checkbox />} label="세탁기" />
            <FormControlLabel control={<Checkbox />} label="TV" />
            </OptCheck>
            </Opt>
        </FormGroup>
          <Br/>
          <DialogContentText fontSize={12}>
          <PPP>개인정보처리방침</PPP>
            <p> 검토가 완료되면 호스트 유저로 전환되며, 기간은 휴일 외 5일 정도 소요됩니다. 
                만약 호스트에 적합하지 않다고 판단되면 입력하신 정보는 안전하게 폐기됩니다.</p>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleOpen}>완료</Button>
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

const Br = styled.div`
margin-bottom : 10px;
`

const Opt = styled.div`
margin : 10px 0;
font-weight : bolder;
`

const OptCheck = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
`

const PPP = styled.p`
text-decoration : underline;
font-weight : bolder;
margin-top : 20px;
margin-bottom : 5px;
`

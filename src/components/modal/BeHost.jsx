import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Box, Button, TextField, Checkbox, Slider,
FormGroup, FormControl, FormControlLabel } from '@mui/material';
import { MdSupervisedUserCircle } from 'react-icons/md';


function BeHost() {
  // 여기서부터 추가된 코드입니다.
  const [RoomType, setRoomType] = useState("");
  const [RoomName, setRoomName] = useState("");
  const [RoomAddress, setRoomAddress] = useState("");
  const [DateFrom, setDateFrom] = useState("");
  const [DateUpto, setDateUpto] = useState("");
  const [MaxGuest, setMaxGuest] = useState("");
  const [Parking, setParking] = useState("");
  const [Kitchen, setKitchen] = useState("");
  const [Wifi, setWifi] = useState("");
  const [Aircon, setAircon] = useState("");
  const [Washer, setWasher] = useState("");
  const [TV, setTV] = useState("");

  const onRoomTypleHandler = (event) => {
    setRoomType(event.currentTarget.value)
  }
  
  const onRoomNameHandler = (event) => {
    setRoomName(event.currentTarget.value)
  }

  const onRoomAddressHandler = (event) => {
    setRoomAddress(event.currentTarget.value)
  }
  
  const onDateFromsHandler = (event) => {
    setDateFrom(event.currentTarget.value)
  }  

  const onDateUptoHandler = (event) => {
    setDateUpto(event.currentTarget.value)
  }  

  const onMaxGuestHandler = (event) => {
    setMaxGuest(event.currentTarget.value)
  }  

  const onParkingHandler = (event) => {
    setParking(event.currentTarget.value)
  }  

  const onKitchenHandler = (event) => {
    setKitchen(event.currentTarget.value)
  }  

  const onWifiHandler = (event) => {
    setWifi(event.currentTarget.value)
  }  

  const onAirconHandler = (event) => {
    setAircon(event.currentTarget.value)
  }  

  const onWasherHandler = (event) => {
    setWasher(event.currentTarget.value)
  }  

  const onTVHandler = (event) => {
    setTV(event.currentTarget.value)
  }  

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      roomtype : RoomType,
      roomname : RoomName,
      roomaddress : RoomAddress,
      datefrom : DateFrom,
      dateupto : DateUpto,
      maxguest : MaxGuest,
      parking : Parking,
      kitchen : Kitchen,
      wifi : Wifi,
      aircon : Aircon,
      washer : Washer,
      tv : TV
    }
    Host(body);
  }
    const Host=async (body) => {
      try {
        let data = {
          roomtype : body.RoomType,
          roomname : body.RoomName,
          roomaddress : body.RoomAddress,
          datefrom : body.DateFrom,
          dateupto : body.DateUpto,
          maxguest : body.MaxGuest,
          parking : body.Parking,
          kitchen : body.Kitchen,
          wifi : body.Wifi,
          aircon : body.Aircon,
          washer : body.Washer,
          tv : body.TV
        }
        const res = await axios.post(`http://ip/api/host/register`, data);
        window.alert('신청이 완료되었습니다!');
        navigate.push('/');
        } catch(err) {
          window.alert('입력한 정보를 다시 확인해주세요!')
        }
  }
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
      <Wrap>
      <MdSupervisedUserCircle fontSize={25}/>
      <P onClick={handleOpen}>호스트 되기</P>
      </Wrap>
      <Dialog onSubmit={onSubmitHandler} open={open} onClose={handleClose}>
          <PP>호스트 유저로 전환 신청</PP>
          <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={20} fontWeight={"bolder"}>
          아래의 양식을 모두 채워주세요.
        </DialogTitle>
        <DialogContent>
        <FormControl sx={{
          width : '90%',
          display : 'flex',
          margin : '10px auto',
          flexDirection : 'row',
          justifyContent : 'space-between'}}>
          <TextField
            helperText="아파트/오피스텔/단독주택"
            label="Room Type"
            value={RoomType}
            onChange={onRoomTypleHandler}
          />
          <TextField
            helperText="상호명/건물명"
            label="Room Name"
            value={RoomName}
            onChange={onRoomNameHandler}
          />
        </FormControl>
        <FormControl sx={{
          width : '90%',
          margin : '10px auto',
          display : 'flex',
          justifyContent : 'center'}}>
        <TextField 
            helperText="ex) 서울특별시 용산구 이태원로 22, 2층"
            label="Room Address"
            value={RoomAddress}
            onChange={onRoomAddressHandler}
          />
        </FormControl>        
        <Br/>
        <FormGroup>
            <Opt>
              <p>Usable Date / Max Guest</p>
              <AD>
              <TextField
                autoFocus
                id="from"
                margin="dense"
                label=""
                type="date"
                variant="standard"
                helperText="부터"
                value={DateFrom}
                onChange={onDateFromsHandler}
              />
              <TextField
                autoFocus
                id="to"
                margin="dense"
                type="date"
                variant="standard"
                helperText="까지"
                value={DateUpto}
                onChange={onDateUptoHandler}
              />
              /
              <TextField
                autoFocus
                margin="dense"
                type="number"
                variant="standard"
                helperText="최대 이용가능 인원"
                value={MaxGuest}
                onChange={onMaxGuestHandler}
              />
              </AD>
            </Opt>
        </FormGroup>
            <Opt>
            <p fontWeight='bolder'>Option</p>
            <OptCheck>
            <FormControlLabel 
            value={Parking} onChange={onParkingHandler}
            control={<Checkbox />} label="주차장"
            />
            <FormControlLabel
            value={Kitchen} onChange={onKitchenHandler}
            control={<Checkbox />} label="실내취사"
            />
            <FormControlLabel
            value={Wifi} onChange={onWifiHandler}
            control={<Checkbox defaultChecked />} label="Wifi"
            />
            <FormControlLabel
            value={Aircon} onChange={onAirconHandler}
            control={<Checkbox />} label="에어컨"
            />
            <FormControlLabel 
            value={Washer} onChange={onWasherHandler}
            control={<Checkbox />} label="세탁기" 
            />
            <FormControlLabel 
            value={TV} onChange={onTVHandler}
            control={<Checkbox />} label="TV" 
            />
            </OptCheck>            
            </Opt>
          <hr/>
          <DialogContentText fontSize={12}>
          <PPP>개인정보처리방침</PPP>
            <p> 검토가 완료되면 호스트 유저로 전환되며, 기간은 휴일 외 5일 정도 소요됩니다. 
                만약 호스트에 적합하지 않다고 판단되면 입력하신 정보는 안전하게 폐기됩니다.</p>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onSubmitHandler}>완료</Button>
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
padding : 10px 0;
`

const AD = styled.div`
display : flex;
flex-direction : row;
justify-content : space-around;
align-items : center;
`

const Opt = styled.div`
margin : 5px 0;
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

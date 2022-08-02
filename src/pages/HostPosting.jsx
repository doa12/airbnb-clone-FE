import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogActions,
DialogContent, DialogContentText, 
Button, TextField, Checkbox, IconButton, Stack,
FormGroup, FormControl, FormControlLabel } from '@mui/material';


function BeHost() {
  // 여기서부터 추가된 코드입니다.
  const [Image, setImage] = useState("");
  const [Apartment, setApartment] = useState("");
  const [Offistel, setOffistel] = useState("");
  const [House, setHouse] = useState("");
  const [RoomName, setRoomName] = useState("");
  const [RoomAddress, setRoomAddress] = useState("");
  // const [DateFrom, setDateFrom] = useState("");
  // const [DateUpto, setDateUpto] = useState("");
  const [MaxGuest, setMaxGuest] = useState("");
  const [Parking, setParking] = useState("");
  const [Kitchen, setKitchen] = useState("");
  const [Wifi, setWifi] = useState("");
  const [Aircon, setAircon] = useState("");
  const [Washer, setWasher] = useState("");
  const [TV, setTV] = useState("");

  const onImagetHandler = (event) => {
    setImage(event.currentTarget.value)
  }
  
  const onApartmentHandler = (event) => {
    setApartment(event.currentTarget.value)
  }

  const onOffistelHandler = (event) => {
    setOffistel(event.currentTarget.value)
  }

  const onHouseHandler = (event) => {
    setHouse(event.currentTarget.value)
  }
  
  const onRoomNameHandler = (event) => {
    setRoomName(event.currentTarget.value)
  }

  const onRoomAddressHandler = (event) => {
    setRoomAddress(event.currentTarget.value)
  }
  
  // const onDateFromsHandler = (event) => {
  //   setDateFrom(event.currentTarget.value)
  // }  

  // const onDateUptoHandler = (event) => {
  //   setDateUpto(event.currentTarget.value)
  // }  

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
      image : Image,
      apartment : Apartment,
      offistel : Offistel,
      house : House,
      roomname : RoomName,
      roomaddress : RoomAddress,
      // datefrom : DateFrom,
      // dateupto : DateUpto,
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
          image : body.Image,
          apartment : body.Apartment,
          offistel : body.Offistel,
          house : body.House,
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
        const res = await axios.post(`http://ip/api/host/room`, data);
        window.alert('등록되었습니다!');
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

  return (
    <>
      {/* <P onClick={()=>{navigate.push('/api/host/room')
        }}>숙소 등록하기</P> */}
      <P onClick={handleOpen}>숙소 등록하기</P>
      <Dialog fullWidth onSubmit={onSubmitHandler} open={open} onClose={handleClose}>
          <PP>숙소 등록</PP>
          <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={20} fontWeight={"bolder"}>
          <p>Upload Image</p>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button value={Image} onChange={onImagetHandler}
            variant="contained" component="label">
              숙소 이미지 등록
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Stack>
        </DialogTitle>
        <hr/>
        <DialogTitle fontFamily={"Md"} fontSize={15} fontWeight={"bolder"}>
          <p>아래의 양식을 채워주세요.</p>
          <p>체크박스는 등록할 숙소와 일치하는 항목을 적어도 1개 선택해주세요.</p>
        </DialogTitle>
        <DialogContent>
        <FormControl sx={{
          width : '90%',
          display : 'flex',
          margin : '10px auto',
          flexDirection : 'row',
          justifyContent : 'space-between'}}>
          <Opt>
            <p fontWeight='bolder'>RoomType</p>
            <OptCheck>
            <FormControlLabel 
            value={Apartment} onChange={onApartmentHandler}
            control={<Checkbox />} label="아파트"
            />
            <FormControlLabel 
            value={Offistel} onChange={onOffistelHandler}
            control={<Checkbox />} label="오피스텔"
            />
            <FormControlLabel 
            value={House} onChange={onHouseHandler}
            control={<Checkbox />} label="단독주택"
            />
            </OptCheck>
          </Opt>
          </FormControl>
        <FormControl sx={{
          width : '90%',
          margin : '10px auto',
          display : 'flex',
          justifyContent : 'center'}}>
        <TextField 
            helperText="숙소 이름"
            label="Room Name"
            value={RoomAddress}
            onChange={onRoomAddressHandler}>
        </TextField>
        <TextField 
            helperText="ex) 서울특별시 용산구 이태원로 22, 2층"
            label="Room Address"
            value={RoomAddress}
            onChange={onRoomAddressHandler}
          />
        </FormControl>        
        <FormGroup sx={{
          width : '90%',
          margin : '10px auto',
          display : 'flex',
          justifyContent : 'center'}}>
            <Opt>
            <p>Max Guest</p>
              {/* <p>Usable Date / Max Guest</p> */}
              {/* <AD>
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
              / */}
              <TextField
                autoFocus
                margin="dense"
                type="number"
                variant="standard"
                helperText="최대 이용가능 인원"
                value={MaxGuest}
                onChange={onMaxGuestHandler}
              />
              {/* </AD> */}
            </Opt>
        </FormGroup>
        <FormControl sx={{
          width : '90%',
          margin : '10px auto',
          display : 'flex',
          justifyContent : 'center'}}>
            <Opt>
            <p fontWeight='bolder'>Option</p>
              <OptCheck>
                <FormControlLabel 
                value={Parking} onChange={onParkingHandler}
                control={<Checkbox />} label="주차장"
                />
                <FormControlLabel
                value={Kitchen} onChange={onKitchenHandler}
                control={<Checkbox />} label="취사"
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
              {/* <DialogContentText fontSize={12}>
              <PPP>입력하신 정보를 다시 한 번 확인해주세요.</PPP>
              </DialogContentText> */}
            </Opt>
          </FormControl>
        </DialogContent>
        <DialogActions>        
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onSubmitHandler}>등록</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BeHost

const P = styled.p`
cursor : pointer;
`

const PP = styled.p`
display : flex;
align-items : center;
justify-content : center;
padding : 15px;
font-size : 15px;
font-weight : bolder;

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

// const PPP = styled.p`
// text-decoration : underline;
// font-weight : bolder;
// margin-top : 20px;
// margin-bottom : 5px;
// `
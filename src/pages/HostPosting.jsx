import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

import { Button, IconButton, TextField, Checkbox,
FormControl, FormControlLabel } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import Header from '../components/header/MainHeader'



function HostPosting() {
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
  const [Price, setPrice] = useState("");
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

  const onPriceHandler = (event) => {
    setPrice(event.currentTarget.value)
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
      price : Price,
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
          price : body.Price,
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

  return (
    <>
      <Header/>
      <HomeContainer>
      <T>
        <p>숙소 등록하기</p>
        <XST>
          <p>아래의 양식을 <Span>모두</Span> 채워주세요.</p>
        </XST>
        <Br/>
        <Hr/>
        <ST>
          <Br/>
          <P>이미지 업로드
          <IconButton value={Image} onChange={onImagetHandler}
          color="warning" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          </P>
        </ST>
      </T>
      <Wrap>
        <FormControl sx={{
          width : '100%',
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
          <Opt2>
            <p>Max Guest</p>
              <TextField
                autoFocus
                margin="0 auto"
                type="number"
                variant="standard"
                helperText="최대 이용가능 인원"
                value={MaxGuest}
                onChange={onMaxGuestHandler}
              />
          </Opt2>
          <Opt2>
            <p>Price / day</p>
              <TextField
                autoFocus
                margin="0 auto"
                type="text"
                variant="standard"
                helperText="1박 가격"
                value={Price}
                onChange={onPriceHandler}
              />
          </Opt2>
          </FormControl>
          <Br/>
          <FormControl sx={{
          width : '100%',
          display : 'flex',
          margin : '0 auto',
          flexDirection : 'row'}}>
            <TextField 
              fullWidth
              helperText="숙소 이름"
              label="Room Name"
              id="RoomName"
              value={RoomName}
              onChange={onRoomNameHandler}>
            </TextField>
            <TextField 
              fullWidth
              helperText="ex) 서울특별시 용산구 이태원로 22, 2층"
              label="Room Address"
              id="RoomAddress"
              value={RoomAddress}
              onChange={onRoomAddressHandler}
            />
          </FormControl>
          <Br/>
          <Opt>
            <p fontWeight='bolder'>Option</p>
          </Opt>
          <Opt3>
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
          </Opt3>
          <Br/>
          <Post>
          <Button onClick={()=>{
            navigate.push('/')
          }}>취소</Button>
          <Button onClick={onSubmitHandler}>등록</Button>
          </Post>
        </Wrap>
      </HomeContainer>
    </>
  )
}

export default HostPosting

const HomeContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    @media screen and (min-width:550px) {
        gap:20px;
    }

    @media screen and (min-width:940px) {
        gap:15px;
    }

    @media screen and (min-width:1125px) {
        gap:13.3px;
    }
`

const T = styled.div`
margin-top : 5%;
font-weight : bolder;
font-size : 20px;
padding-bottom : 0;
`

const P = styled.p`
padding-left : 10px;
padding-bottom : 5px;
`

const Wrap = styled.div`
width : 95%;
padding-left : 20px;
`

const Br = styled.div`
padding : 5px 0;
`

const Hr = styled.hr`
width : 860px;
border : 0.1px solid lightgray;
`

const ST = styled.div`
background-color : whitesmoke;
padding : 5px;
font-size : 15px;
`

const XST = styled.div`
padding : 5px 0;
font-size : 12px;
font-weight : normal;
`

const Span = styled.span`
text-decoration : underline;
: hover{
    cursor : pointer;
}
`

const Opt = styled.div`
margin : 5px 0;
font-size : 15px;
font-weight : bolder;
`

const Opt2 = styled.div`
width : 20%;
margin : 5px 0;
padding-right : 1%;
font-size : 15px;
font-weight : bolder;
`

const Opt3 = styled.div`
width : 95%;
display : flex;
justify-content : space-between;
margin : 5px 0;
font-size : 15px;
font-weight : bolder;
`

const Post = styled.div`
display : flex;
justify-content : flex-end;
width : 100%;
margin : 5px 0;
font-size : 15px;
font-weight : bolder;
`

const OptCheck = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
`
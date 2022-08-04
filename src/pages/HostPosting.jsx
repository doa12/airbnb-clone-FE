import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Button, IconButton, TextField, Checkbox,
FormControl, FormControlLabel } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { storage } from '../shared/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Header from '../components/header/MainHeader'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import instance from '../shared/axios';
import {AiFillCheckCircle} from 'react-icons/ai';



function HostPosting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 여기서부터 추가된 코드입니다.
  const [image, setImage] = useState([]);
  const [options, setOptions] = useState({
    parking:false,
    kitchen:false,
    aircon:false,
    wifi:false,
    washer:false,
    tv:false
  })
  const [category, setCategory] = useState("");
  const [otherDatas, setOtherDatas] = useState({
    title:"",
    maxGuest:null,
    price:null,
    information:"",
    location:""
  })
  

  const onChangeImage = async (e) => {
    let newImages = [];
    let files = e.target.files;
    if(files.length!==2) {
      alert('이미지 파일은 꼭 2개를 업로드 해주세요!');
      setImage([]);
      return;
    }
    if(files && files[0] && files[1]) {
        for(let imageFile of files) {
          let uploaded_file = await uploadBytes(ref(storage, `images/${imageFile.name}`), imageFile);
          let file_url = await getDownloadURL(uploaded_file.ref);
          console.log(file_url);
          newImages.push(file_url);
        }
        setImage([...newImages]);
    }
  }

  const onChangeOptions = (e) => {
      if(e.target.checked) {
        setOptions({...options, [e.target.name]:true});
      }
      else {
        setOptions({...options, [e.target.name]:false});
      }
  }

  const onClickCategory = (e) => {
    setCategory(e.target.value);
  }

  const onChangeOthersData = (e) => {
    setOtherDatas({...otherDatas, [e.target.name]:e.target.value});
    console.log(otherDatas);
  }

  const onSubmitHandler = async () => {
    if(!image.length || !category) {
      alert('이미지, 입력 폼을 모두 완성해주세요');
      return;
    }
    let otherDataValidation = Object.values(otherDatas);
    for(let i of otherDataValidation) {
      if(!i) {
        alert('이미지, 입력 폼을 모두 완성해주세요');
        return;
      }
    }
    let new_data;
    let resultOptions = [];
    const keys = Object.keys(options);
    const values = Object.values(options);
    for(let i = 0; i < values.length; i++) {
      if(values[i]) resultOptions.push(keys[i]);
    }
    new_data = {
      imgUrl:image,
      title:otherDatas.title,
      maxGuest:Number(otherDatas.maxGuest),
      price:Number(otherDatas.price),
      information:otherDatas.information,
      location:otherDatas.location,
      option:resultOptions,
      category:category
    }

    console.log(new_data);
    const res = await instance.post('/api/host/room', new_data).catch((e) => alert('error'));
    const data = res.data;
    if(data.status === 200) {
      navigate('/');
      
    }
    alert(data.message);
    

  }
   
// 이 위로가 새로 추가한 코드입니다.


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
          <IconButton value={Image} 
          color="warning" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" multiple onChange={onChangeImage}/>
            <PhotoCamera />
          </IconButton>
          {image.length?<p style={{color:'green', fontSize:"20px"}}><AiFillCheckCircle/></p>:null}
          </P>
        </ST>
      </T>
      <Wrap>
        <FormControl sx={{
          width : '100%',
          display : 'flex',
          margin : '10px',
          flexDirection : 'row',
          justifyContent : 'space-between'}}>
          <Opt>
            <p fontWeight='bolder'>RoomType</p>
            <OptCheck>
            <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="apartment" onClick={onClickCategory} control={<Radio/>} label="apartment" />
        <FormControlLabel value="offistel" onClick={onClickCategory} control={<Radio/>} label="offistel" />
        <FormControlLabel value="house" onClick={onClickCategory} control={<Radio/>} label="house" />
      </RadioGroup>
    </FormControl>
            </OptCheck>
          </Opt>
          <Opt2>
            <p>Max Guest</p>
              <TextField
                autoFocus
                margin="auto"
                type="text"
                variant="standard"
                helperText="최대 이용가능 인원"
                value={otherDatas.maxGuest}
                name="maxGuest"
                onChange={onChangeOthersData}
              />
          </Opt2>
          <Opt2>
            <p>Price / day</p>
              <TextField
                margin="0 auto"
                type="text"
                variant="standard"
                helperText="1박 가격"
                value={otherDatas.price}
                name="price"
                onChange={onChangeOthersData}
              />
          </Opt2>
          </FormControl>
          <Br/>
          <FormControl sx={{
          width : '100%',
          display : 'flex',
          // margin : '0 auto',
          flexDirection : 'row'}}>
            <TextField 
              fullWidth
              helperText="숙소 이름"
              label="Room Name"
              id="RoomName"
              value={otherDatas.title}
              name="title"
              onChange={onChangeOthersData}>
            </TextField>
            <TextField 
              fullWidth
              helperText="ex) 서울특별시 용산구"
              label="Room Address"
              id="RoomAddress"
              value={otherDatas.location}
              name="location"
              onChange={onChangeOthersData}
            />
          </FormControl>
          <Br/>
          <Opt>
            <p fontWeight='bolder'>Option</p>
          </Opt>
          <Opt3>
              <FormControlLabel 
              name='parking'onClick={onChangeOptions}
              control={<Checkbox />} label="주차장"
              />
              <FormControlLabel
              name='kitchen' onClick={onChangeOptions}
              control={<Checkbox />} label="실내취사"
              />
              <FormControlLabel
              name='wifi' onClick={onChangeOptions}
              control={<Checkbox/>} label="무선인터넷"
              />
              <FormControlLabel
              name='aircon' onClick={onChangeOptions}
              control={<Checkbox />} label="에어컨"
              />
              <FormControlLabel 
              name='washer' onClick={onChangeOptions}
              control={<Checkbox />} label="세탁기" 
              />
              <FormControlLabel 
              name='tv' onClick={onChangeOptions}
              control={<Checkbox />} label="TV" 
              />
          </Opt3>
          <Br/>
          <InformationTextField name="information" value={otherDatas.information} onChange={onChangeOthersData}/>
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

export default HostPosting;

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
font-weight : bold;
font-size : 20px;
padding-bottom : 0;
`

const P = styled.p`
display:flex;
align-items:center;
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
width:calc(100vw * (90 / 100));
border : 0.1px solid lightgray;
`

const ST = styled.div`
background-color : whitesmoke;
padding : 5px;
font-size : 15px;
width:100%;
`

const XST = styled.div`
padding : 5px 0;
font-size : 12px;
font-weight : normal;
`

const Span = styled.span`
text-decoration : underline;
:hover{
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

const InformationTextField = styled.textarea`
  resize:none;
  width:100%;
  height:400px;
  font-size:18px;
  padding:20px;
  box-sizing:border-box;
  line-height:1.6;
`
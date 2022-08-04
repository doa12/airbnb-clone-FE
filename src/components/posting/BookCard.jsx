import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, CardMedia,
  Box, Button, Typography
} from '@mui/material';
import { BsFillStarFill } from 'react-icons/bs';

const sliceString = (str) => {
  return str.slice(0, 10);
}

const BookCard = ({item}) => {
    // 추후 함수형 초기화로 데이터를 받아와서 false true값 설정
    
    
    return (
      <>
        <CardWrapper>
        <Card sx={{
          maxWidth: "100%", border:"none", borderRadius:"10px",
          display:"flex", alignItems:"center"
          }}>
          <Box width='30%' borderRadius='10px'>
          <CardMedia
            component="img"
            height="200"
            image={`${item.imgUrl}`}
            sx={{borderRadius:"10px"}}
          >
          </CardMedia>
          </Box>
          <Box width='67%'>
          <CardContent sx={{border:'none', marginLeft:'10px'}}>
          
              
            <Typography gutterBottom variant="h6" component="div" sx={{color:"black", fontWeight:"bold"}}>
              {`${item.title}, ${item.location}`}
            </Typography>
            <Typography fontSize={12} gutterBottom variant="p" component="div" sx={{color:"gray", fontWeight:"bold"}}>
              <p>{`체크인 : ${sliceString(item.checkIn)}`}</p>
              <p>{`체크아웃 : ${sliceString(item.checkOut)}`}</p>
            </Typography>
            <Br/>
            <Price>
            <p>{`이용 인원 : ${item.guestNum}명`}</p>
            </Price>
            <Br/>
            <Price>
            <Typography fontSize={15} gutterBottom variant="h7" component="div" sx={{fontWeight:"bold"}}>
              {`결제 금액 : ￦${item.totalPrice}`}
            </Typography>
            </Price>
          </CardContent>
          </Box>
        </Card>
        </CardWrapper>
      </>
      );
}

export default BookCard;

const CardWrapper = styled.div`
    width:100%;
    cursor:pointer;
    position: relative;
    user-select:none;
    border:none;

    // @media screen and (min-width:550px) {
    //     width:calc(100% / 2 - 10px);
    // }
    // @media screen and (min-width:940px) {
    //     width:calc(100% / 3 - 10px);
    // }
    // @media screen and (min-width:1125px) {
    //     width:calc(100% / 4 - 10px);
    // }

    .wish-icon {
        position:absolute;
        font-size:25px;
        top:10px;
        right:20px;
    }
`
const Br = styled.div`
padding : 5px;
`

const Price = styled.div`
display : flex;
justify-content : flex-end;
align-items : center;
font-weight : bolder;
color : black;
`

const Span = styled.span`
text-decoration : underline;
:hover{
    cursor : pointer;
}
`
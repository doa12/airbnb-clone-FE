import React, {useState} from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, CardMedia,
  Box, Button, Typography
} from '@mui/material';
import { BsFillStarFill } from 'react-icons/bs';

const PostingCard = () => {
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
            image="https://stickher.kr/web/product/tiny/202202/bc21580bc8f761f08822b127cdd3a221.jpg"
            sx={{borderRadius:"10px"}}
          >
          </CardMedia>
          </Box>
          <Box width='67%'>
          <CardContent sx={{border:'none', marginLeft:'10px'}}>
          <Typography fontSize={12} gutterBottom variant="p" component="div" sx={{color:"gray", fontWeight:"bold"}}>
              22-08-02 이용완료
            </Typography>
              
            <Typography gutterBottom variant="h6" component="div" sx={{color:"gray", fontWeight:"bold", textDecoration:"line-through"}}>
              하동월영재, 올모스트홈
            </Typography>
            <Br/>
            <Price>
            <BsFillStarFill color='#ff415e'/><Span></Span>4.9
            </Price>
            <Br/>
            <Price>
            <Typography fontSize={15} gutterBottom variant="h7" component="div" sx={{fontWeight:"bold"}}>
              이용완료된 숙소입니다.
            </Typography>
            </Price>
          </CardContent>
          </Box>
        </Card>
        </CardWrapper>
      </>
      );
}

export default PostingCard;

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
: hover{
    cursor : pointer;
}
`
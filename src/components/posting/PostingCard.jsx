import React, {useState} from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, CardMedia,
  Button, Typography
} from '@mui/material';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';


const PostingCard = () => {
    // 추후 함수형 초기화로 데이터를 받아와서 false true값 설정
    const [wish, setWish] = useState(false);
    return (
        <CardWrapper>
            <p className='wish-icon' onClick={
              ()=>setWish((wish) => (!wish))}>{
              !wish?<BsSuitHeart color='#ff415e'/>
              :<BsSuitHeartFill color='#ff415e'/>}</p>
        <Card sx={{ maxWidth: "100%", border:"none"}}>
          <CardMedia
            component="img"
            height="350"
            image="https://stickher.kr/web/product/tiny/202202/bc21580bc8f761f08822b127cdd3a221.jpg"
            alt="green iguana"
            sx={{borderRadius:"10px"}}
          >
            
          </CardMedia>
          <CardContent sx={{border:'none'}}>
            <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:"bold"}}>
              한옥독채, 한국
            </Typography>
            <Typography gutterBottom variant="p" component="div" sx={{color:"gray"}}>
              하동월영재, 올모스트홈
            </Typography>
            <Typography gutterBottom variant="p" component="div" sx={{color:"gray"}}>
              ￦180,000 / 1박
            </Typography>
          </CardContent>
        </Card>
        </CardWrapper>
      );
}

export default PostingCard;

const CardWrapper = styled.div`
    width:100%;
    cursor:pointer;
    position: relative;
    user-select:none;
    border:none;

    @media screen and (min-width:550px) {
        width:calc(100% / 2 - 10px);
    }
    @media screen and (min-width:940px) {
        width:calc(100% / 3 - 10px);
    }
    @media screen and (min-width:1125px) {
        width:calc(100% / 4 - 10px);
    }

    .wish-icon {
        position:absolute;
        font-size:25px;
        top:10px;
        right:20px;
    }
`
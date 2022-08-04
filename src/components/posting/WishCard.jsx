import React, {useState} from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, CardMedia,
  Box, Button, Typography
} from '@mui/material';
import { BsFillStarFill, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import instance from '../../shared/axios';
import { useNavigate } from 'react-router-dom';


const WishCard = ({item}) => {
    // 추후 함수형 초기화로 데이터를 받아와서 false true값 설정
    const [wish, setWish] = useState(()=> {
      if(item.isWish) return true;
      else if(!item.isWish) return false;
    });
    const navigate = useNavigate();
    const onClickWishButton = async () => {
      if(!wish) {
        await instance.post(`/api/wishlist/${item.roomId}`).catch((e) => alert('error'));
        setWish((wish) => (!wish));
      }
      else {
        await instance.delete(`/api/wishlist/${item.roomId}`).catch((e) => alert('eroor'));
        setWish((wish) => (!wish));
      }
    }
    return (
      <>
        <CardWrapper>
        <WishIconArea>
            <p className='wish-icon' onClick={onClickWishButton}>
              {!wish?<BsSuitHeart color='#ff415e'/>:<BsSuitHeartFill color='#ff415e'/>}</p>
            </WishIconArea>
        <Card sx={{
          maxWidth: "100%", border:"none", borderRadius:"10px",
          display:"flex", alignItems:"center"
          }} onClick={()=>navigate(`/detail/${item.roomId}`)}>
          <Box width='30%' borderRadius='10px'>
          <CardMedia
            component="img"
            height="200"
            image={item.imgUrl}
            sx={{borderRadius:"10px"}}
          >
          </CardMedia>
          </Box>
          <Box width='67%'>
          <CardContent sx={{border:'none', marginLeft:'10px'}}>
            <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:"bold"}}>
              {item.title}
            </Typography>
            <Br/>
            <Typography fontSize={12} gutterBottom variant="p" component="div" sx={{color:"gray"}}>
              {item.hostname}
            </Typography>
            <Price>
            <Typography fontSize={15} gutterBottom variant="h7" component="div" sx={{fontWeight:"bold"}}>
              {item.location}, 한국
            </Typography>
            </Price>
            <Price>
            <Typography fontSize={15} gutterBottom variant="h7" component="div" sx={{fontWeight:"bold"}}>
              {`￦${item.price} / 1박`}
            </Typography>
            </Price>
          </CardContent>
          </Box>
        </Card>
        </CardWrapper>
      </>
      );
}

export default WishCard;

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

const WishIconArea = styled.div`
  width:100%;
  position:relative;
  background:blue;
  z-index:1;
`
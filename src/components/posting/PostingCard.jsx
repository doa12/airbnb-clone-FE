import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, CardMedia,
  Button, Typography
} from '@mui/material';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import instance from '../../shared/axios';


const PostingCard = ({ item, idx, setPage, length }) => {
    // const isLast = useSelector(state=>state.posting.isLast);
    const [target, setTarget] = useState(null);
    // 추후 함수형 초기화로 데이터를 받아와서 false true값 설정
    const [wish, setWish] = useState(()=> {
      if(item.isWish) return true;
      else if(!item.isWish) return false;
    });
    const navigate = useNavigate();

    const onIntersect = ([entry], observer) => {
      if(entry.isIntersecting) {
        //page 올리는 로직
        observer.unobserve(entry.target);
        setPage((page) => page + 1);
      }
    }

  const onClickPostingCard = () => {
    navigate(`/detail/${item.roomId}`);
  }

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

    useEffect(()=> {
      let observer;
      if(target) {
        observer = new IntersectionObserver(onIntersect, {threshold:0.8});
        observer.observe(target);
      }

      return(()=> {
        observer && observer.disconnect();
      })
    }, [target])


    return (
        <CardWrapper ref={idx == length - 1 ? setTarget : null} >
            <WishIconArea>
            <p className='wish-icon' onClick={onClickWishButton}>
              {!wish?<BsSuitHeart color='#ff415e'/>:<BsSuitHeartFill color='#ff415e'/>}</p>
            </WishIconArea>
            
        <Card sx={{ maxWidth: "100%", border:"none"}} onClick={onClickPostingCard}>
          <CardMedia
            component="img"
            height="350"
            image={item.imgUrl}
            alt="green iguana"
            sx={{borderRadius:"10px"}}
          >
            
          </CardMedia>
          <CardContent sx={{border:'none'}}>
            <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:"bold"}}>
              {`${item.location}, 한국`}
            </Typography>
            <Typography gutterBottom variant="p" component="div" sx={{color:"gray"}}>
              {item.title}
            </Typography>
            <Typography gutterBottom variant="p" component="div" sx={{color:"gray"}}>
              {`￦${item.price}`} / 1박
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
    background:gray;

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

const WishIconArea = styled.div`
  width:100%;
  position:relative;
  background:blue;
  z-index:1;
`
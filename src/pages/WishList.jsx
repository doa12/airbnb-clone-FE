import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/MainHeader'
import NoData from '../components/posting/NoData';
import WishCard from '../components/posting/WishCard';
import instance from '../shared/axios';
// 2022-12-11T10:00:00

const WishList = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchWishData = async () => {
            const res = await instance.get('/api/mypage/wishlist?page=0&size=20');
            const data = res.data;
            setDatas(data.content);
        }

        fetchWishData().catch(console.error);
    }, [])

    return(
        <>
            {/* <Header/> */}
            <HomeContainer>
                {!datas.length?<NoData/>:null}
                {datas.map((item, index) => <WishCard key={item.roomId} item={item}/>)}
            </HomeContainer>
        </>
    )
}

export default WishList;

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

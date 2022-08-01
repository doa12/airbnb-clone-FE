import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/MainHeader'
import WishCard from '../components/posting/WishCard';

const WishList = () => {

    return(
        <>
            <Header/>
            <HomeContainer>
                <T><p>위시리스트</p><Tag>날짜</Tag><Tag>인원</Tag></T>
                <WishCard />
                <WishCard />
                <WishCard />
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

const T = styled.div`
font-weight : bolder;
font-size : 20px;
`

const Tag = styled.button`
border : 2px solid #f7f7f7;
border-radius : 30px;
background-color : white;
font-size : 12px;
padding : 7px 15px;
margin-top : 5px;
`
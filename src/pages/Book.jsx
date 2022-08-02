import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/MainHeader'
import BookCard from '../components/posting/BookCard';

const Book = () => {

    const navigate = useNavigate();

    return(
        <>
            <Header/>
            <HomeContainer>
                <T>
                    <p>여행</p>
                    <Br/>
                    <Hr/>
                    <ST>
                        <Br/>
                        <p>아직 예약된 여행이 없습니다!</p>
                        <XST>
                            <p>여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.</p>
                        </XST>
                        <Br/>
                        <Button onClick={()=>{
                            navigate.push('/api/rooms?category=all,apartment, offistel,house&page=0부터시작&size=20&sort=createdAt,DESC')
                        }}>숙소 검색하기</Button>
                    </ST>
                </T>
                <BookCard />
                <BookCard />
                <Hr/>
                    <XST>
                        <p>예약 내역을 찾으실 수 없다면 <Span>도움말 센터</Span>를 방문해주세요.</p>
                    </XST>
            </HomeContainer>
        </>
    )
}

export default Book;

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
padding-bottom : 0;
`

const Br = styled.div`
padding : 5px 0;
`

const Hr = styled.hr`
width : 860px;
border : 0.1px solid lightgray;
`

const ST = styled.div`
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

const Button = styled.button`
background-color : white;
border : 1px solid #ff415e;
border-radius : 10px;
padding : 10px 15px;
font-weight : bolder;
color : #ff415e;
: hover{
    background-color : #ff415e;
    color : white;
    cursor : pointer;
}
`
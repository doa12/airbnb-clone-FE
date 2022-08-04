import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/MainHeader'
import BookCard from '../components/posting/BookCard';
import instance from '../shared/axios';
import NoData from '../components/posting/NoData';

const Book = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchReservationData = async () => {
            const res = await instance.get('/api/mypage/reservation?page=0&size=20');
            const data = res.data;
            setData(data.content);
        }
        fetchReservationData().catch(console.error);
    }, [])
    // /api/mypage/reservation?page=0부터시작&size=20
    return(
        <>
            {/* <Header/> */}
            <HomeContainer>
                {!data.length?<NoData/>:null}
                {data.map((item, index) => <BookCard item={item} key={item.roomId}></BookCard>)}
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
import React from 'react';
import styled from 'styled-components';
import PostingCard from '../components/posting/PostingCard';
import PostingViewer from '../components/posting/PostingViewer';

const Home = () => {

    return(
        <HomeContainer>
            <PostingCard></PostingCard>
            <PostingCard></PostingCard>
            <PostingCard></PostingCard>
            <PostingCard></PostingCard>
            <PostingCard></PostingCard>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    width:100%;
    padding-top:85px;
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



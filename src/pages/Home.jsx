import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { postingActions, fetchPostingDataFirst, fetchFilteringPostingDataFirst } from '../redux/modules/postingSlice';
import PostingCard from '../components/posting/PostingCard';


const Home = () => {
    const [page, setPage] = useState(0);
    const isFiltering = useSelector(state => state.posting.filtering.isFiltering);
    const category = useSelector(state => state.posting.filtering.structType);
    const options = useSelector(state => state.posting.filtering.options);
    const postings = useSelector(state => state.posting.postings);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isFiltering) {
            // dispatch(postingActions.setDefaultPostings());
            dispatch(fetchPostingDataFirst());
        }
        else if(isFiltering) {
            // dispatch(postingActions.setDefaultPostings());
            dispatch(fetchFilteringPostingDataFirst())
        }

        return(()=> {
            dispatch(postingActions.setDefaultPostings());
        })
        
    }, [isFiltering, category, options])

    useEffect(()=> {
        if(page === 0) return;
        else {
            // 무한스크롤 로직
            if(!isFiltering) {

            }
            else if(isFiltering) {

            }
            console.log('hello');
        }
    }, [page])

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



import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { postingActions, fetchPostingDataFirst, fetchFilteringPostingDataFirst, fetchPostingDataByScroll, fetchFilteringPostingDataByScroll } from '../redux/modules/postingSlice';
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
            dispatch(fetchPostingDataFirst());
        }
        else if(isFiltering) {
            dispatch(fetchFilteringPostingDataFirst())
        }

        return(()=> {
            // 의존성 배열에 있는 데이터가 바뀌면 Home컴포넌트 언마운트.
            // 카테고리가 바뀔 때,
            // 필터링 기능을 켰을 때
            // 필터링 기능이 켜져 있는 상태에서 필터링 기준(option)을 바꿀 때
            dispatch(postingActions.setDefaultPostings()); // postings를 비워줌
            setPage(0); // page값을 초기화 해야 다른 포스팅을 보여줄 때 무한스크롤이 적용됨.
        })
        
    }, [isFiltering, category, options])

    useEffect(()=> {
        if(page === 0) return;
        else {
            // 무한스크롤 로직
            if(!isFiltering) {
                dispatch(fetchPostingDataByScroll({page}));
            }
            else if(isFiltering) {
                dispatch(fetchFilteringPostingDataByScroll({page}));
            }
        }
    }, [page])

    return(
        <HomeContainer>
            {postings.map((posting, index) => <PostingCard key={posting.roomId} item={posting} idx={index} setPage={setPage} length={postings.length}/>)}
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



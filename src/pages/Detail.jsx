import React from 'react';
import styled from 'styled-components';

const Detail = () => {

    return(
        <DetailContainer>
            <DetailHeader>
                <h1 className='posting-title'>[코코하우스]</h1>
                <p className='posting-location'>가평면, 경기도, 한국</p>
            </DetailHeader>
            <DetailImagesArea>

            </DetailImagesArea>
         
        </DetailContainer>
    )
}

export default Detail;

const DetailContainer = styled.div`
    width:100%;
    background:yellow;
`

const DetailHeader = styled.div`
    width:100%;
    height:80px;
    padding:10px 0;
    background:blue;
`

const DetailImagesArea = styled.div`
    display:flex;
    width:100%;
    height:400px;
    background:gray;
    border-radius:20px;
`

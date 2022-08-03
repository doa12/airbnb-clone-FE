import React from 'react';
import styled from 'styled-components';

const NoData = () => {

    return(
        <NoDataWrapper>
            <p>No Data🙄</p>
        </NoDataWrapper>
    )
}

export default NoData;

const NoDataWrapper = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    left:0;
    top:0;
    font-weight:bold;
    font-size:30px;
    padding-top:80px;
`
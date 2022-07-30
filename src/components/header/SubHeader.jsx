import React from 'react';
import styled from 'styled-components';


const SubHeader = () => {
    
    return(
        <SubHeaderWrapper>
            <SubHeaderContent>

            </SubHeaderContent>
        </SubHeaderWrapper>
    )
}

export default SubHeader;

const SubHeaderWrapper = styled.div`
    position:fixed;
    padding:10px 0;
    border-bottom:1px solid lightgray;
    left:0;
    top:80px;
    width:100%;
    height:60px;
    background:white;
`

const SubHeaderContent = styled.div`
    width:90%;
    background:red;
    height:100%;
    margin:0 auto;
`
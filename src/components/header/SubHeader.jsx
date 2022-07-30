import React from 'react';
import styled from 'styled-components';
import { FaAirbnb } from 'react-icons/fa';
import { MdApartment } from 'react-icons/md';
import { HiOfficeBuilding } from 'react-icons/hi';
import { BsHouseFill, BsFilterRight } from 'react-icons/bs';


const SubHeader = ({ setIsFilter }) => {
    
    return(
        <SubHeaderWrapper>
            <SubHeaderContent>
                <SubHeaderOption>
                    <OptionDiv>
                        <p className='subheader-icon'><FaAirbnb></FaAirbnb></p>
                        <p className='subheader-desc'>all</p>
                    </OptionDiv>
                    <OptionDiv>
                        <p className='subheader-icon'><MdApartment/></p>
                        <p className='subheader-desc'>apartment</p>
                    </OptionDiv>
                    <OptionDiv>
                        <p className='subheader-icon'><HiOfficeBuilding/></p>
                        <p className='subheader-desc'>offistel</p>
                    </OptionDiv>
                    <OptionDiv>
                        <p className='subheader-icon'><BsHouseFill/></p>
                        <p className='subheader-desc'>house</p>
                    </OptionDiv>
                </SubHeaderOption>
                <FilterButton onClick={()=>setIsFilter(true)}><BsFilterRight/>필터</FilterButton>
            </SubHeaderContent>
        </SubHeaderWrapper>
    )
}

export default SubHeader;

const SubHeaderWrapper = styled.div`
    position:fixed;
    display:flex;
    align-items:center;
    padding:10px 0;
    border-bottom:1px solid lightgray;
    left:0;
    top:81px;
    width:100%;
    height:60px;
    background:white;
    z-index:10;
`

const SubHeaderContent = styled.div`
    position:relative;
    width:90%;
    height:80%;
    margin:0 auto;

`

const SubHeaderOption = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width:35%;
    margin:0 auto;
    height:100%;
`

const OptionDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    cursor:pointer;
    color:gray;
    

    .subheader-icon {
        font-size:30px;
    }
    .subheader-desc {
        font-weight:bold;
    }
`

const FilterButton = styled.button`
    position:absolute;
    right:0;
    top:0;
    background:white;
    height:100%;
    border-radius:20px;
    width:100px;
    border:2px solid lightgray;
    cursor:pointer;
`
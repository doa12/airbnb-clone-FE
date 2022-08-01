import React, { useEffect } from 'react';
import styled from 'styled-components';

const Filter = ({ setIsFilter }) => {

    // 모달창이 보여질 때 배경의 스크롤을 막기 위한 코드
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);



    const ClickHandler = (e) => {
        if(e.target.classList.contains('filter-wrapper')) {
            setIsFilter(false);
        }
    }

    return(
        <FilterWrapper className='filter-wrapper' onClick={ClickHandler}>
            <FilterContent>
                <FilterHeader><p>필터</p></FilterHeader>
                <FilterController>
                    dddd
                </FilterController>
                <FilterFooter></FilterFooter>
            </FilterContent>
        </FilterWrapper>
    )
}

export default Filter;

const FilterWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(220,220,220,0.6);
    z-index:1000;
`

const FilterContent = styled.div`
    width:40vw;
    height:80vh;
    background:white;
    border-radius:20px;
`
const FilterHeader = styled.div`
    padding: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:10%;
    background:yellow;
    border-radius:20px;
    font-weight:bold;
    box-sizing:border-box;
`

const FilterController = styled.div`
    padding: 20px;
    width:100%;
    height:80%;
    
    box-sizing:border-box;
`
const FilterFooter = styled.div`
    padding: 20px;
    width:100%;
    height:10%;
    background:black;
    box-sizing:border-box;
`
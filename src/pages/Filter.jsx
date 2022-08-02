import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Filter = ({ setIsFilter }) => {

    const [data, setData] = useState({
        isParking:"false",
        isKitchen:"false",
        isWifi:"false",
        isAircon:"false",
        isWasher:"false",
        isTV:"false",
        minPrice:"",
        maxPrice:""
    });

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

    const checkBoxClickHandler = (e) => {
        if(e.target.checked) {
            setData({...data, [e.target.name]:e.target.value});
        }
        else {
            setData({...data, [e.target.name]:"false"});
        }
    }

    const priceChangeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    }

    return(
        <FilterWrapper className='filter-wrapper' onClick={ClickHandler}>
            <FilterContent>
                <FilterHeader><p>필터</p></FilterHeader>
                <FilterController>
                    <div className='price-wrap'>
                        <h2>가격 범위</h2>
                        <div className='price-controller'>
                            <input placeholder='최저 가격' name="minPrice" onChange={priceChangeHandler} value={data.minPrice}></input>
                            <span> ~ </span>
                            <input placeholder='최고 가격' name="maxPrice" onChange={priceChangeHandler} value={data.maxPrice}></input>
                        </div>
                    </div>
                    <div className='controller-wrap'>
                        <h2>편의시설</h2>
                        {/* <div className='price-controller'> */}
                        <div>
                            <label htmlFor="isParking">주차장</label>
                            <input type="checkbox" id="isParking" name="isParking" value="true" onClick={checkBoxClickHandler}/>
                        </div>
                        <div>
                            <label htmlFor="isKitchen">부엌/취사</label>
                            <input type="checkbox" id="isKitchen" name="isKitchen" value="true" onClick={checkBoxClickHandler}/>
                        </div>
                        <div>
                            <label htmlFor="isWifi">무선인터넷</label>
                            <input type="checkbox" id="isWifi" name="isWifi" value="true" onClick={checkBoxClickHandler}/>
                        </div>
                        <div>
                            <label htmlFor="isAircon">에어컨</label>
                            <input type="checkbox" id="isAircon" name="isAircon" value="true" onClick={checkBoxClickHandler}/>
                        </div>
                        <div>
                            <label htmlFor="isWasher">세탁기</label>
                            <input type="checkbox" id="isWasher" name="isWasher" value="true" onClick={checkBoxClickHandler}/>
                        </div>
                        <div>
                            <label htmlFor="isTV">TV</label>
                            <input type="checkbox" id="isTV" name="isTV" value="true" onClick={checkBoxClickHandler}/>
                        </div>
                        {/* </div> */}
                    </div>
                    
                </FilterController>
                <FilterFooter>
                    <p>필터초기화</p>
                    <button>표시</button>
                </FilterFooter>
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
    /* background:yellow; */
    border-bottom:1px solid lightgray;
    
    font-weight:bold;
    box-sizing:border-box;
`

const FilterController = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding: 20px;
    width:100%;
    height:75%;
    
    box-sizing:border-box;

    .controller-wrap, .price-wrap {
        padding-bottom:20px;
        h2 {
            margin-bottom:20px;
        }
        .price-controller {
            display:flex;
            justify-content:center;
            align-items:center;
            gap:10px;
            input {
                padding:10px;
                border-radius:10px;
            }
        }
    }
    .price-wrap {
        border-bottom:1px solid lightgray;
    }
`
const FilterFooter = styled.div`
    display:flex;
    align-items:center;
    padding: 20px;
    width:100%;
    height:15%;
    /* background:black; */
    box-sizing:border-box;
    border-top:1px solid lightgray;
    p {
        flex:1;
        cursor:pointer;
        font-weight:bold;
    }
    button {
        cursor:pointer;
        width:30%;
        height:90%;
        border-radius:10px;
        background:black;
        color:white;
        font-weight:bold;
        font-size:17px;
    }
`


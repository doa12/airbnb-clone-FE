import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Detail = () => {
    const params = useParams(); // 포스팅 아이디로 데이터 꺼내오기
    const [date, setDate] = useState({
        startDate:"",
        endDate:""
    });
    const [diffDays, setDiffDays] = useState(0);
    const dateChangeHandler = (e) => {
        
        setDate({...date, [e.target.name]:e.target.value});
        console.log(date);
    }

    useEffect(() => {
        if(date.startDate && date.endDate) {
            const date1 = moment(date.startDate);
            const date2 = moment(date.endDate);
            date1.format();
            date2.format();

            const result = date2.diff(date1, "days");
            if(result <= 0) {
                setDate({...date, endDate:""});
                return;
            }

            setDiffDays(result);

            
        }
    }, [date])
    return(
        <DetailContainer>
            <DetailHeader>
                <h1 className='posting-title'>[코코하우스]</h1>
                <p className='posting-location'>가평면, 경기도, 한국</p>
            </DetailHeader>
            <DetailImagesArea>
                <DetailImageDiv>

                </DetailImageDiv>
                <DetailImageDiv>

                </DetailImageDiv>
            </DetailImagesArea>

            <DetailContent>
                <DetailDesc>dfsdf</DetailDesc>
                <DetailReserve>
                    <DetailReservationBox>
                        <ReservationBoxPrice><p>$442,123</p><span>/ 박</span></ReservationBoxPrice>
                        <ReservationDataInputs>
                        <input type='date' name="startDate" onChange={dateChangeHandler} value={date.startDate}></input>
                        <span>~</span>
                        <input type='date' name="endDate" onChange={dateChangeHandler} value={date.endDate}></input>
                    </ReservationDataInputs>
                    <ReservationButton>예약하기</ReservationButton>
                    <ReservationDesc><p>예약 확정 전에는 요금이 청구되지 않습니다.</p></ReservationDesc>
                    <p>{diffDays}</p>
                    
                    </DetailReservationBox>
                    
                </DetailReserve>
            </DetailContent>
         
        </DetailContainer>
    )
}

export default Detail;

const DetailContainer = styled.div`
    position:relative;
    width:100%;
    /* background:yellow; */
`

const DetailHeader = styled.div`
    width:100%;
    height:80px;
    padding:10px 0;
    /* background:blue; */
`

const DetailImagesArea = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    height:400px;
    /* background:gray; */
    border-radius:20px;
`

const DetailImageDiv = styled.div`
    height:100%;
    width:49.5%;
    background:black;
    border:1px solid yellow;
    box-sizing:border-box;
    border-radius:20px;
`

const DetailContent = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    /* background:red; */
`
const DetailDesc = styled.div`
    width:55%;
    background:pink;
`
const DetailReserve = styled.div`
    width:35%;
    background:green;
`

const DetailReservationBox = styled.div`
    padding:20px;
    background:red;
    border-radius:20px;
`

const ReservationBoxPrice = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    width:100%;
    background:yellow;
    font-size:18px;
    margin-bottom:20px;
    p {
        font-weight:bold;
        font-size:25px;
    }
`

const ReservationDataInputs = styled.div`
    width:100%;
    /* background:pink; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    span {
        font-weight:bold;
    }
    input {
        width:45%;
        height:50px;
        border-radius:10px;
        font-weight:bold;
    }
`

const ReservationButton = styled.button`
    width:100%;
    height:50px;
    border-radius:10px;
    border:none;
    background:${({theme}) => theme.colors.airbnb_red};
    color:white;
    font-weight:bold;
`
const ReservationDesc = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    padding:10px 0;
    color:darkgray;

`

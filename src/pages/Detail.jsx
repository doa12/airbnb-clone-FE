import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import instance from '../shared/axios';
import { FaUserAlt } from 'react-icons/fa';
import {MdLocationPin, MdKitchen, MdOutlineAir} from 'react-icons/md';
import {AiOutlineWifi, AiFillCar} from 'react-icons/ai';
import { BiRadioCircleMarked } from 'react-icons/bi';
import {GiWashingMachine} from 'react-icons/gi';
import { useSelector } from 'react-redux';



const Detail = () => {
    const params = useParams(); // 포스팅 아이디로 데이터 꺼내오기
    const navigate = useNavigate();
    const username = useSelector(state => state.user.userInfo.username);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [guestNum, setGuestNum] = useState(1);
    const [date, setDate] = useState({
        checkIn:"",
        checkOut:""
    });
    const [diffDays, setDiffDays] = useState(0);
    const [data, setData] = useState({});
    const [images, setImages] = useState({
        first:'',
        second:''
    })
    const dateChangeHandler = (e) => {
        setDate({...date, [e.target.name]:e.target.value});
        console.log(date);
    }

    const onClickReservation = async () => {
        if(!username) {
            alert('로그인 후 이용해주세요!');
            return;
        }
        const new_data = {
            roomId:params.id,
            checkIn:date.checkIn + 'T10:00:00',
            checkOut:date.checkOut + 'T10:00:00',
            guestNum:guestNum,
            totalPrice
        }
        const res = await instance.post('/api/reservation', new_data).catch((e) => alert('error'));
        const data = res.data;
        if(data.status === 400) {
            alert('예약이 이미 차 있는 날짜가 포함되어 있습니다.');
        }
        else if(data.status === 200) {
            alert(data.message)
            navigate('/book');
        }
    }

    const onChangeGuest = (e) => {
        setGuestNum(e.target.value);
    }

    useEffect(()=> {
        const fetchOnePost = async () => {
        const res = await instance(`/api/room/${params.id}`);
        const data = res.data;
        console.log(data);
        console.log(data.imgUrl[0]);
        console.log(data.imgUrl[1]);
        setImages({first:data.imgUrl[0], second:data.imgUrl[1]});
        setData(data);
        
    }
    fetchOnePost().catch(console.error);
}, [])

    useEffect(() => {
        if(date.checkIn && date.checkOut) {
            const date1 = moment(date.checkIn);
            const date2 = moment(date.checkOut);
            date1.format();
            date2.format();

            const result = date2.diff(date1, "days");
            if(result <= 0) {
                setDate({...date, checkOut:""});
                return;
            }
            else {
                setDiffDays(result);
                let total = result * data.price;
                setTotalPrice(total);
            }
        }
    }, [date.checkIn, date.checkOut])

   

    return(
        <DetailContainer>
            <DetailHeader>
                <h1 className='posting-title'>{`[${data.title}]`}</h1>
                <p className='posting-location'>{data.location}</p>
            </DetailHeader>
            <DetailImagesArea>
                <DetailImageDiv style={{backgroundImage:`url(${images.first})`}}>

                </DetailImageDiv>
                <DetailImageDiv style={{backgroundImage:`url(${images.second})`}}>
                </DetailImageDiv>
            </DetailImagesArea>

            <DetailContent>
                <DetailDesc>
                    <DetailWhos>
                        <h2>{`${data.hostname}님이 호스팅하는 ${data.category}`}</h2>
                        <p>{`최대 인원 ${data.maxGuest}`}</p>
                    </DetailWhos>
                    <Detailbadge>
                        <div className='badge-div'>
                            <p className='badge-icon'><FaUserAlt/></p>
                            <div className='badge-desc'>
                                <p>{`${data.hostname}님은 슈퍼호스트 입니다.`}</p>
                                <span>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</span>
                            </div>
                        </div>
                        <div className='badge-div'>
                        <p className='badge-icon'><MdLocationPin/></p>
                            <div className='badge-desc'>
                                <p>{`훌륭한 숙소 위치`}</p>
                                <span>숙박한 많은 게스트들이 위치에 만족하였습니다.</span>
                            </div>
                        </div>

                    </Detailbadge>
                    <DetailAirCover>
                        <div className="aircover-title">
                            <h2 className="aircover-air">에어</h2><h2>커버</h2>
                        </div>
                        <p>모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</p>
                    </DetailAirCover>
                    <DetailInformation>
                        <p>{data.information}</p>
                    </DetailInformation>
                    <OptionsBadge>
                        <h2 style={{width:"100%", marginBottom:"10px"}}>숙소 편의시설</h2>
                        {data.option?.includes("WIFI")?<OptionsBadgeItem>
                            <p><AiOutlineWifi/></p>
                            <p>무선인터넷</p>
                        </OptionsBadgeItem>:null}
                        {data.option?.includes("KITCHEN")?<OptionsBadgeItem>
                            <p><MdKitchen/></p>
                            <p>실내취사</p>
                        </OptionsBadgeItem>:null}
                        {data.option?.includes("PARKING")?<OptionsBadgeItem>
                            <p><AiFillCar/></p>
                            <p>주차장</p>
                        </OptionsBadgeItem>:null}
                        {data.option?.includes("TV")?<OptionsBadgeItem>
                            <p><BiRadioCircleMarked/></p>
                            <p>TV</p>
                        </OptionsBadgeItem>:null}
                        {data.option?.includes("AIRCON")?<OptionsBadgeItem>
                            <p><MdOutlineAir/></p>
                            <p>에어컨</p>
                        </OptionsBadgeItem>:null}
                        {data.option?.includes("WASHER")?<OptionsBadgeItem>
                            <p><GiWashingMachine/></p>
                            <p>세탁기</p>
                        </OptionsBadgeItem>:null}
                        
                    </OptionsBadge>
                    <OptionsBadge></OptionsBadge>
                </DetailDesc>
                <DetailReserve>
                    <DetailReservationBox>
                        <ReservationBoxPrice><p>{`￦${data.price}`}</p><span>/ 박</span></ReservationBoxPrice>
                        <ReservationDataInputs>
                        <input type='date' name="checkIn" onChange={dateChangeHandler} value={date.checkIn}></input>
                        <span>~</span>
                        <input type='date' name="checkOut" onChange={dateChangeHandler} value={date.checkOut}></input>
                    </ReservationDataInputs>
                    <MaxGuestChoice>
                        <input type='number' min="1" max={data.maxGuest} placeholder="인원 수" onChange={onChangeGuest} value={guestNum}></input>
                    </MaxGuestChoice>
                    <ReservationButton onClick={onClickReservation}>예약하기</ReservationButton>
                    <ReservationDesc><p>예약 확정 전에는 요금이 청구되지 않습니다.</p></ReservationDesc>
                    <TotalPriceArea>
                        <p>{`총 금액 X ${diffDays}`}  : </p>
                        <h2>{totalPrice}</h2>
                    </TotalPriceArea>
                    
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
    display:flex;
    flex-direction:column;
    gap:10px;
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
    margin-bottom:50px;
`

const DetailImageDiv = styled.div`
    height:100%;
    width:49.5%;
    border:1px solid lightgray;
    box-sizing:border-box;
    border-radius:20px;
    background-position:center;
    background-size:100% 100%;
    background-repeat:no-repeat;
`

const DetailContent = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    /* background:red; */
`
const DetailDesc = styled.div`
    width:55%;
`
const DetailReserve = styled.div`
    width:35%;
    /* background:green; */
`

const DetailReservationBox = styled.div`
    position:sticky;
    top:120px;
    padding:20px;
    border:1px solid lightgray;
    /* background:red; */
    border-radius:20px;
`

const ReservationBoxPrice = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    width:100%;
    /* background:yellow; */
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
    cursor:pointer;
`
const ReservationDesc = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    padding:10px 0;
    color:darkgray;
`
const TotalPriceArea = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    p {
        font-weight:bold;
    }
`

const MaxGuestChoice = styled.div`
    width:100%;
    margin-bottom:20px;
    input {
        width:100%;
        height:30px;
    }

`

const DetailWhos = styled.div`
    width:100%;
    padding:30px 0;
    border-bottom:1px solid lightgray;
    h1 {
        margin-bottom:20px;
    }
    p {
        color:black;
        
    }
`

const Detailbadge = styled(DetailWhos)`
    display:flex;
    flex-direction:column;
    gap:20px;
    
    .badge-div {
        display:flex;
        gap:10px;
        .badge-icon {
            padding-top:5px;
        }
        .badge-desc {
            display:flex;
            flex-direction:column;
            gap:5px;
            span {
                color:gray;
            }
        }
    }

`

const DetailAirCover = styled(DetailWhos)`
    .aircover-title {
        display:flex;
        margin-bottom:10px;
        h2 {
            font-size:30px;
        }
        .aircover-air {
            color:${({theme}) => theme.colors.airbnb_red};
        }
    }
`



const DetailInformation = styled(DetailWhos)`
    p {
        font-size:15px;
    }
`

const OptionsBadge = styled(DetailWhos)`
    display:flex;
    flex-wrap:wrap;
    gap:30px;
`
const OptionsBadgeItem = styled.div`
    display:flex;
    font-weight:bold;
    gap:10px;
    width:40%;
    
`

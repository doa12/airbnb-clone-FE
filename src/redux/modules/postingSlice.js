import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

const initialState = {
    postings:[],
    filtering:{
        sturctType:"all",
        // isFiltering:false,
        options:{
            isParking:false,
            isKitchen:false,
            isWifi:false,
            isAircon:false,
            isWasher:false,
            isTV:false,
            minPrice:"0",
            maxPrice:"10000000"
        }
    },
    isLast:false
}

export const fetchPostingDataFirst = createAsyncThunk('posting/fetchPostingDataFirst', async (_, { getState, dispatch }) => {
    const category = getState().posting.filtering.sturctType;
    const { isParking, isKitchen, isWifi, isAircon, isWasher, isTV, minPrice, maxPrice } = getState().posting.filtering.options;
    const res = await instance.get(`/api/rooms?category=${category}&parking=${isParking}&kitchen=${isKitchen}&aircon=${isAircon}&wifi=${isWifi}&washer=${isWasher}&tv=${isTV}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=0&size=20`);
    // 이 thunk가 사용되는 컴포넌트에서는 useselector로 filtering 값을 받아와 useEffect 의존성 배열에 넣고 바뀔때마다 데이터 갱신할 수 있도록 구현
    const data = res.data;
    console.log(data);

    return data;
})
// 무한 스크롤
export const fetchPostingDataByScroll = createAsyncThunk('posting/fetchPostingDataByScroll', async ({ page }, { getState, dispatch }) => {
    // page는 1부터 시작
    const category = getState().posting.filtering.sturctType;
    const { isParking, isKitchen, isWifi, isAircon, isWasher, isTV, minPrice, maxPrice } = getState().posting.filtering.options;
    const res = await instance.get(`/api/rooms?category=${category}&parking=${isParking}&kitchen=${isKitchen}&aircon=${isAircon}&wifi=${isWifi}&washer=${isWasher}&tv=${isTV}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&size=20`);
    const data = res.data;

    console.log(data);

    return data;
})


const postingSlice = createSlice({
    name:'posting',
    initialState,
    reducers: {
        changeSturctType:(state, action)=> {
            state.filtering.sturctType = action.payload;
        },
        setDefaultPostings:(state) => {
            state.postings = [];
        }
    },
    extraReducers: {
        [fetchPostingDataFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload.content;
            state.isLast = action.payload.isLast;
        },
        [fetchPostingDataByScroll.fulfilled.type]: (state, action) => {
            state.postings = [...state.postings, ...action.payload.content];
            state.isLast = action.payload.isLast;
        }
    }
})

const postingActions = postingSlice.actions;
export { postingActions };

export default postingSlice.reducer;
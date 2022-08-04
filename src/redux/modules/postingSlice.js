import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

const initialState = {
    postings:[],
    wishListPostings:[],
    filtering:{
        structType:"all",
        isFiltering:false,
        options:{
            isParking:"false",
            isKitchen:"false",
            isWifi:"false",
            isAircon:"false",
            isWasher:"false",
            isTV:"false",
            minPrice:"0",
            maxPrice:"10000000"
        }
    },
    isLast:false
}
export const fetchPostingDataFirst = createAsyncThunk('posting/fetchPostingDataFirst', async (_, { getState, dispatch }) => {
    const category = getState().posting.filtering.structType;
    const username = getState().user.userInfo.username;
    let endpoint;
    if(username) endpoint = '/api/rooms/user';
    if(!username) endpoint = '/api/rooms';
    const res = await instance.get(`${endpoint}?category=${category}&page=0&size=12`);
    const data = res.data;

    return data;
})

export const fetchPostingDataByScroll = createAsyncThunk('posting/fetchPostingDataByScroll', async ({ page }, { getState, dispatch }) => {
    const category = getState().posting.filtering.structType;
    const username = getState().user.userInfo.username;
    let endpoint;
    if(username) endpoint = '/api/rooms/user';
    if(!username) endpoint = '/api/rooms';
    const res = await instance.get(`${endpoint}?category=${category}&page=${page}&size=12`);

    const data = res.data;


    return data;
})

export const fetchFilteringPostingDataFirst = createAsyncThunk('posting/fetchFilteringPostingDataFirst', async (_, { getState, dispatch }) => {
    const category = getState().posting.filtering.structType;
    const username = getState().user.userInfo.username;
    let endpoint;
    if(username) endpoint = '/api/rooms/user';
    if(!username) endpoint = '/api/rooms';
    const { isParking, isKitchen, isWifi, isAircon, isWasher, isTV, minPrice, maxPrice } = getState().posting.filtering.options;
    const res =
    await instance.get(`${endpoint}?category=${category}&parking=${isParking}&kitchen=${isKitchen}&aircon=${isAircon}&wifi=${isWifi}&washer=${isWasher}&tv=${isTV}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=0&size=12`);
    // 이 thunk가 사용되는 컴포넌트에서는 useselector로 filtering 값을 받아와 useEffect 의존성 배열에 넣고 바뀔때마다 데이터 갱신할 수 있도록 구현
    const data = res.data;

    return data;
})
// 무한 스크롤
export const fetchFilteringPostingDataByScroll = createAsyncThunk('posting/fetchFilteringPostingDataByScroll', async ({ page }, { getState, dispatch }) => {
    // page는 1부터 시작
    const username = getState().user.userInfo.username;
    let endpoint;
    if(username) endpoint = '/api/rooms/user';
    if(!username) endpoint = '/api/rooms';
    const category = getState().posting.filtering.structType;
    const { isParking, isKitchen, isWifi, isAircon, isWasher, isTV, minPrice, maxPrice } = getState().posting.filtering.options;
    const res =
    await instance.get(`${endpoint}?category=${category}&parking=${isParking}&kitchen=${isKitchen}&aircon=${isAircon}&wifi=${isWifi}&washer=${isWasher}&tv=${isTV}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&size=12`);
    const data = res.data;


    return data;
})


const postingSlice = createSlice({
    name:'posting',
    initialState,
    reducers: {
        changeStructType:(state, action)=> {
            state.filtering.structType = action.payload;
        },
        setDefaultPostings:(state) => {
            state.postings = [];
        },
        setDefaultIsLast:(state) => {
            state.isLast = false;
        },
        setTrueIsFiltering:(state) => {
            state.filtering.isFiltering = true;
        },
        setFalseIsFiltering:(state) => {
            state.filtering.isFiltering = false;
        },
        closeFiltering:(state) => {
            // 필터링 기능 끄기
            state.filtering.isFiltering = false;
            const defaultFiltering = {
                structType:state.filtering.structType,
                isFiltering:false,
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
            }
            state.filtering = defaultFiltering;
        },
        openFiltering:(state, action) => {
            // 필터링기능 켜기
            // 클라이언트에서 고른 필터링 기준을 리덕스에 반영
            state.filtering.options = action.payload;
        },
        setDefaultCategory: (state) => {
            state.filtering.category = "all";
        }
    },
    extraReducers: {
        [fetchPostingDataFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload.content;
            state.isLast = action.payload.last;
            // state.filtering.isFiltering = false;
        },
        [fetchPostingDataByScroll.fulfilled.type]: (state, action) => {
            state.postings = [...state.postings, ...action.payload.content];
            state.isLast = action.payload.last;
            // state.filtering.isFiltering = false;
        },
        [fetchFilteringPostingDataFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload.content;
            state.isLast = action.payload.last;
        },
        [fetchFilteringPostingDataByScroll.fulfilled.type]:(state, action) => {
            state.postings = [...state.postings, ...action.payload.content];
            state.isLast = action.payload.last;
            // state.filtering.isFiltering = true;
        }
    }
})

const postingActions = postingSlice.actions;
export { postingActions };

export default postingSlice.reducer;
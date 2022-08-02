import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

const initialState = {
    postings:[],
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
    const res = await instance.get(`/api/rooms?category=${category}/page=0&size=12`);
    const data = res.data;
    console.log(data);

    return data;
})

export const fetchPostingDataByScroll = createAsyncThunk('posting/fetchPostingDataByScroll', async ({ page }, { getState, dispatch }) => {
    const category = getState().posting.filtering.structType;
    const res = await instance.get(`/api/rooms?category=${category}/page=${page}&size=12`);

    const data = res.data;
    console.log(data);

    return data;
})

export const fetchFilteringPostingDataFirst = createAsyncThunk('posting/fetchFilteringPostingDataFirst', async (_, { getState, dispatch }) => {
    const category = getState().posting.filtering.structType;
    const { isParking, isKitchen, isWifi, isAircon, isWasher, isTV, minPrice, maxPrice } = getState().posting.filtering.options;
    const res =
    await instance.get(`/api/rooms?category=${category}&parking=${isParking}&kitchen=${isKitchen}&aircon=${isAircon}&wifi=${isWifi}&washer=${isWasher}&tv=${isTV}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=0&size=12`);
    // 이 thunk가 사용되는 컴포넌트에서는 useselector로 filtering 값을 받아와 useEffect 의존성 배열에 넣고 바뀔때마다 데이터 갱신할 수 있도록 구현
    const data = res.data;
    console.log(data);

    return data;
})
// 무한 스크롤
export const fetchFilteringPostingDataByScroll = createAsyncThunk('posting/fetchFilteringPostingDataByScroll', async ({ page }, { getState, dispatch }) => {
    // page는 1부터 시작
    const category = getState().posting.filtering.structType;
    const { isParking, isKitchen, isWifi, isAircon, isWasher, isTV, minPrice, maxPrice } = getState().posting.filtering.options;
    const res =
    await instance.get(`/api/rooms?category=${category}&parking=${isParking}&kitchen=${isKitchen}&aircon=${isAircon}&wifi=${isWifi}&washer=${isWasher}&tv=${isTV}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&size=12`);
    const data = res.data;

    console.log(data);

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
        closeFiltering:(state) => {
            // 필터링 기능 끄기
            const defaultFiltering = {
                structType:"all",
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
            state.filtering.isFiltering = false;
        },
        setDefaultCategory: (state) => {
            state.filtering.category = "all";
        }
    },
    extraReducers: {
        [fetchPostingDataFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload.content;
            state.isLast = action.payload.isLast;
            state.filtering.isFiltering = false;
        },
        [fetchPostingDataByScroll.fulfilled.type]: (state, action) => {
            state.postings = [...state.postings, ...action.payload.content];
            state.isLast = action.payload.isLast;
            state.filtering.isFiltering = false;
        },
        [fetchFilteringPostingDataFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload.content;
            state.isLast = action.payload.isLast;
            state.filtering.isFiltering = true;
        },
        [fetchFilteringPostingDataByScroll.fulfilled.type]:(state, action) => {
            state.postings = [...state.postings, ...action.payload.content];
            state.isLast = action.payload.isLast;
            state.filtering.isFiltering = true;
        }
    }
})

const postingActions = postingSlice.actions;
export { postingActions };

export default postingSlice.reducer;
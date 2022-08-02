import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{
        nickname:''
    },
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo.nickname = action.payload;
        },
        deleteUserInfo: (state) => {
            state.userInfo.nickname = '';
        }
    }
})

const userActions = userSlice.actions;
export { userActions };

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{
        username:'',
        isHost:null
    },
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo.username = action.payload.username;
            state.userInfo.isHost = action.payload.isHost;
        },
        deleteUserInfo: (state) => {
            state.userInfo.username = '';
            state.userInfo.isHost = null;
        }
    }
})

const userActions = userSlice.actions;
export { userActions };

export default userSlice.reducer;
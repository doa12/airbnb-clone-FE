import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{

    },
    isAppend:false
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        toggleIsAppend:(state, action)=> {
            state.isAppend = !state.isAppend;
        }
    }
})

const userActions = userSlice.actions;
export { userActions };

export default userSlice.reducer;
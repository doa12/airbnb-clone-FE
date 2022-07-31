import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./modules/userSlice";
import postingSlice from "./modules/postingSlice";

const store = configureStore({
    reducer: {
        user:userSlice,
        posting:postingSlice
    }
})

export default store;
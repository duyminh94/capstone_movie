import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../src/Slices/authSlice"
import userSlice from "../src/Slices/userSlice"

const store = configureStore ({
    reducer: {
        auth: authSlice,
        user: userSlice,
    }
})

export default store
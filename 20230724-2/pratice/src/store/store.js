import { configureStore } from '@reduxjs/toolkit'
import {userSlice,SignUpSlice} from '../features/UserSlice'

export const store= configureStore({
    reducer:{
        user: userSlice.reducer,
       
    }
})
export default store;
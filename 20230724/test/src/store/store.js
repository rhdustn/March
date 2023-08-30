import {configureStore} from "@reduxjs/toolkit"
import { countSlice,countSlice2 } from "../features/countSlice"

// 저장소 생성
export const store = configureStore(
    {
        reducer :{
            // 가게 만들면서 메뉴판 전달
            // 리듀서를 전달
            count : countSlice.reducer,
            count2 : countSlice2.reducer
        },
    }
)
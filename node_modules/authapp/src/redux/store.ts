import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authslice";
import { crudSlice } from "./crudSlice";

export const Store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        crud:crudSlice.reducer
    }
})

export type RootState=ReturnType<typeof Store.getState>
export type AppDispatch=typeof Store.dispatch;
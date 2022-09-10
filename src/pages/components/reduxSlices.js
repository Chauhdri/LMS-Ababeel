import { createSlice } from "@reduxjs/toolkit";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebaseServer"



    

export const loginState = createSlice({


    name:"loginState",
    initialState:{state:"true"},
    reducers:{
        state:()=>state="false"



    }
}
)

export const {state} = loginState.actions;
export default loginState.reducer

import { createSlice } from "@reduxjs/toolkit";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebaseServer"



    

export const errorMsg = createSlice({


    name:"errVisible",
    initialState:{visibility:true},
    reducers:{
        visibility:(state)=>{state.visibility=!state.visibility

console.log(state)
console.log(state.visibility)
}

    }
}
)

export const {visibility} = errorMsg.actions;
export default errorMsg.reducer

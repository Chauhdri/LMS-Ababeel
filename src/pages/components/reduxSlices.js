import { createSlice } from "@reduxjs/toolkit";



    

export const errorMsg = createSlice({


    name:"errVisible",
    initialState:{visibility:false,message:"undefined"},
    reducers:{
        visibility:(state)=>{state.visibility=!state.visibility},
        message:(state,action)=>{state.message=(action.payload)},
    }
}
)

export const {visibility,message} = errorMsg.actions;
export default errorMsg.reducer

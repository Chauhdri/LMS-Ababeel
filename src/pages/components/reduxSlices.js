import { createSlice } from "@reduxjs/toolkit";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebaseServer"

function Authentication (){
    const [user] = useAuthState(auth);
return user;
}
export const loginState = createSlice({


    name:"loginState",
    initialState:{state:false},
    reducers:{
        state:()=>state=Authentication()



    }
}
)

export const {state} = loginState.actions;
export default loginState.reducer

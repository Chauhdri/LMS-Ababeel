


import { configureStore } from '@reduxjs/toolkit'
import loginStateReducer from "./reduxSlices"

export default configureStore({
  reducer: {
    loginState:loginStateReducer
  },
})

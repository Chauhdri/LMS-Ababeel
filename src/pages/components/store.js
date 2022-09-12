


import { configureStore } from '@reduxjs/toolkit'
import errVisibleReducer from "./reduxSlices"

export default configureStore({
  reducer: {
    errVisible:errVisibleReducer
  },
})

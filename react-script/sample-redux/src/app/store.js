// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {}
// })

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
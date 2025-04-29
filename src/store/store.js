import {configureStore} from '@reduxjs/toolkit'
import profileReducer from '../slices/profileSlice.js'

const store = configureStore({
    reducer:profileReducer
})

export default store


import {configureStore, createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../utils/export'
const API_URL = "http://localhost:3001/api/gh/";

// async function fetchData(username) {
//   return await fetch(API_URL).then((res) => {
//     res.json();
//     // console.log(res.json(), "exports.js fetchData")
//   });
// }

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    initializeData(state, action) {
      state = action.payload
    }
  }
})

const store = configureStore({
  reducer: {
    data: dataSlice.reducer
  }
})

store.dispatch(dataSlice.actions.initializeData(
  fetchData()
))


console.log(store.getState())

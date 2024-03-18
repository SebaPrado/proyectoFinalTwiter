import hola from "./initialState_Tweets";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const tweetsSlice = createSlice({
    name: "tweets",
    initialState: [hola],
    reducers: {
    createTweet(state, action) {
        state.push (action.payload)},

    deleteTweet(state, action) {state },
    }});


const tweetsReducer = tweetsSlice.reducer;
const actions= tweetsSlice.actions

const createTweet= actions.createTweet
const deleteTweet= actions.deleteTweet


export default tweetsReducer;
export {createTweet, deleteTweet}
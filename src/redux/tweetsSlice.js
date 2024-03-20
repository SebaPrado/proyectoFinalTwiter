import hola from "./initialState_Tweets";
import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [hola],
  reducers: {
    addTweets(state, action) {
      return [...action.payload, ...state];
    },

    createTweet(state, action) {
      state.push(action.payload);
    },

    deleteTweet(state, action) {
      state;
    },
  },
});

const tweetsReducer = tweetsSlice.reducer;
const actions = tweetsSlice.actions;

const createTweet = actions.createTweet;
const deleteTweet = actions.deleteTweet;
const addTweets = actions.addTweets;

export default tweetsReducer;
export { addTweets, createTweet, deleteTweet };

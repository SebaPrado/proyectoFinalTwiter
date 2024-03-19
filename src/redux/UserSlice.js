import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " user",
  initialState: {
    token: null,
  },
  reducers: {
    updateToken(state, action) {
      const token = action.payload;

      state.token = token;
    },
  },
});

const { reducer, actions } = userSlice;
export const { updateToken } = actions;
export default reducer;

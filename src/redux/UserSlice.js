import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " user",
  initialState: {
    token: "",
  },
  reducers: {
    updateToken(state, action) {
      const token = action.payload;

      state.token = token;
    },
  },
});


// updateToken= actions.updateToken
// const userReducer = userSlice.reducer;
// const actions = userSlice.actions;

// export const { userAuthorization, updateToken }  
// export default userReducer;

const {reducer, actions}= userSlice;
export const {updateToken}= actions
export default reducer 
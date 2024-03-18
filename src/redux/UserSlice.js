import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " user",
  initialState: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQ2MTUwMmUwZTc5Y2M3MjMyZWU5NTEiLCJpYXQiOjE3MTA3MTI5NDd9.zHbsLPznh1_eGJ2G6YJRC1dn179pO2MvS2nwQei_qM0",
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
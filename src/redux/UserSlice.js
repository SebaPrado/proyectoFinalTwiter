import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: " user",
  initialState: {
<<<<<<< HEAD
    token: "",
=======
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWY4NGRkNGQ0ZTJkZGM3NWI0NGZhY2IiLCJpYXQiOjE3MTA3NzE4MzV9.Rt8XtrlzPFG0tmCRZ7B5pqr7BX380ArocTtKwdN0hBQ",
>>>>>>> b3ee9b08bc781649a1dfbdf825ece3756bff19f1
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

const { reducer, actions } = userSlice;
export const { updateToken } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorizationStatus: false,
  profile: null,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setAuthorizationStatus, setProfile } = authorizationSlice.actions;

export default authorizationSlice.reducer;
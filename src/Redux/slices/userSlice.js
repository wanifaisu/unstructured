import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'UserDetails',
  initialState: {
    userProfileDetails: {},
    userAccountDetailsArr: [],
  },
  reducers: {
    updateUserDetails: (state, action) => {
      state.userProfileDetails = action.payload;
    },
    addUserAccountDetails: (state, action) => {
      state.userAccountDetailsArr = action.payload;
    },
  },
});

export const { updateUserDetails, addUserAccountDetails } = loadingSlice.actions;
export default loadingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'UserDetails',
  initialState: {
    userProfileDetails: {},
  },
  reducers: {
    updateUserDetails: (state, action) => {
      state.userProfileDetails = action.payload;
    },
  },
});

export const { updateUserDetails } = loadingSlice.actions;
export default loadingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: !!localStorage.getItem('userData'), // Check local storage for auth status
  userData: JSON.parse(localStorage.getItem('userData')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuth = false;
      state.userData = null;
      localStorage.removeItem('userData');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

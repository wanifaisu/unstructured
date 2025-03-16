import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Import your reducer
import loadingReducer from './slices/loadingSlice';
import UserDetailsReducer from './slices/userSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    UserDetails: UserDetailsReducer,
  },
});

export default store;

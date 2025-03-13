import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Import your reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add more reducers as needed
  },
});

export default store;
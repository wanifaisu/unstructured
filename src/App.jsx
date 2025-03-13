import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./globalStyles.css";
import Disputes from "./pages/Disputes";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
import Offers from "./pages/Offers";
import Payment from "./pages/Payments";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import { login } from "./Redux/slices/authSlice";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
  }, [isAuth]);
console.log(isAuth,"")
  return (
    <Routes>
      {isAuth ? (
        <>
          {/* Redirect authenticated users away from /login */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Offers />} />
            <Route path="disputes" element={<Disputes />} />
            <Route path="payment_history" element={<Payment />} />
            <Route path="support" element={<Support />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notification />} />
          </Route>

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          {/* Redirect all unauthenticated users to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;

import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './globalStyles.css';
import { login } from './Redux/slices/authSlice';
import { setLoading } from './Redux/slices/loadingSlice';
import Loader from './components/Loading';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserDetails } from './Redux/slices/userSlice';
import OfferAccept from './pages/OfferAccept';

// Lazy Load Pages
const Disputes = React.lazy(() => import('./pages/Disputes'));
const Login = React.lazy(() => import('./pages/Login'));
const Notification = React.lazy(() => import('./pages/Notification'));
const Offers = React.lazy(() => import('./pages/Offers'));
const Payment = React.lazy(() => import('./pages/Payments'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Support = React.lazy(() => import('./pages/Support'));

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const userData = useSelector((state) => state?.auth?.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true)); // Start loading
    const userData = localStorage.getItem('userData');
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
    setTimeout(() => dispatch(setLoading(false)), 1000); // Stop loading after delay
  }, [dispatch]);
  const getUserDetailsData = () => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user_details/${userData?.contact_id}`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response?.data?.success) {
          dispatch(updateUserDetails(response?.data.data));
          dispatch(setLoading(false));
        }
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getUserDetailsData();
  }, [userData?.token]);
  return (
    <Suspense fallback={<Loader />}>
      <Loader />
      <Routes>
        {isAuth ? (
          <>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Layout />}>
              <Route path="accept_offer" element={<OfferAccept />} />
              <Route index element={<Offers />} />
              <Route path="disputes" element={<Disputes />} />
              <Route path="payment_history" element={<Payment />} />
              <Route path="support" element={<Support />} />
              <Route path="profile" element={<Profile />} />
              <Route path="notification" element={<Notification />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Suspense>
  );
}

export default App;

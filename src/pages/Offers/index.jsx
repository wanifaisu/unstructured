import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../Redux/slices/loadingSlice';
import axios from 'axios';
export default function Offers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.UserDetails?.userProfileDetails);
  const [accountDetails, setAccountDetails] = useState([]);
  console.log(userData?.contact_id, 'userData');
  const getUserDetailsData = () => {
    dispatch(setLoading(true));
    axios
      .get(`http://localhost:3000/api/user_account/accounts/${userData?.contact_id}`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response?.data?.success) {
          setAccountDetails(response?.data?.data);
          dispatch(setLoading(false));
        }
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };
  useEffect(() => {
    getUserDetailsData();
  }, [userData?.contact_id]);
  return (
    <div className="content">
      <div className="content-box">
        <h1>Welcome {userData?.contactName ?? `{{User name}}`}</h1>
        <p className="text-align-left">Let’s resolve your past-due accounts together</p>

        <div className="box-containers">
          <div className="accounts">
            <p>Accounts</p>
            <h2>{accountDetails?.length ?? '0'}</h2>
          </div>

          <div className="new-offers">
            <p>New Offers</p>
            <h2>1</h2>
          </div>
        </div>

        <div className="box-containers">
          {accountDetails?.map((item, index) => {
            console.log(item, 'teyie');
            return (
              <div className="credit-card-ly">
                <div className="row">
                  <h3>{item?.bank_name}</h3>
                  {item?.length > 1 ? (
                    <div className="status gold">Offer Available</div>
                  ) : (
                    <div className="status default-status">No Offer yet</div>
                  )}
                </div>

                <div className="acc">
                  <h4>Account {item?.issuer_account_id}</h4>
                  <p>Current Past Due; ${item?.balance}</p>
                </div>

                <div className="acc">
                  <h4>Pay $500.00 to settle in full</h4>
                  <p>Offer valid until March 15, 2025</p>
                </div>

                <div className="row">
                  <button className="btn-1">
                    <a href="acceptoffer.html">Accept Offer</a>
                  </button>
                  <button
                    onClick={() => navigate('/accept_offer', { state: item })}
                    className="btn-2"
                  >
                    More Options
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

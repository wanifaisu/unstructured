import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
import { useNavigate } from 'react-router-dom';
export default function Offers() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.UserDetails?.userProfileDetails);
  const accountDetails = useSelector((state) => state?.UserDetails?.userAccountDetailsArr);

  return (
    <div className="content">
      <div className="content-box">
        <h1>Welcome {userData?.contactName ?? `{{User name}}`}</h1>
        <p className="text-align-left">Let’s resolve your past-due accounts together</p>

        <div className="box-containers">
          <div className="accounts">
            <p>Accounts</p>
            <h2>{accountDetails?.accounts?.length ?? '0'}</h2>
          </div>

          <div className="new-offers">
            <p>New Offers</p>
            <h2>{accountDetails?.offers?.length ?? '0'}</h2>
          </div>
        </div>

        <div className="box-containers">
          {accountDetails?.accounts && accountDetails?.accounts?.length > 0 ? (
            accountDetails?.accounts?.map((item, index) => {
              return (
                <div className="credit-card-ly">
                  <div className="row">
                    <h3>{item?.bank_name}</h3>
                    {accountDetails?.offers?.length > 1 ? (
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
                    <h4>
                      Pay $
                      {accountDetails?.offers?.length > 0
                        ? accountDetails?.offers[index]?.total_debt_amount
                        : '0'}{' '}
                      to settle in full
                    </h4>
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
            })
          ) : (
            <div className="box-containers">
              <div className="account-card-ly">
                <h2 style={{ color: 'white' }}>No Accounts Found</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

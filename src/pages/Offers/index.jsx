import React from 'react';
import { useSelector } from 'react-redux';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
export default function Offers() {
  const userData = useSelector((state) => state?.auth?.userData);
  console.log(userData,"userData")
  return (
    <div className="content">
      <div className="content-box">
        <h1>Welcome {userData?.username?.slice(0,10)??`{{User name}}`}</h1>
        <p className="text-align-left">
          Let’s resolve your past-due accounts together
        </p>

        <div className="box-containers">
          <div className="accounts">
            <p>Accounts</p>
            <h2>2</h2>
          </div>

          <div className="new-offers">
            <p>New Offers</p>
            <h2>1</h2>
          </div>
        </div>

        <div className="box-containers">
          <div className="credit-card-ly">
            <div className="row">
              <h3>ABC Bank</h3>
              <div className="status gold">Offer Available</div>
            </div>

            <div className="acc">
              <h4>Account #1233</h4>
              <p>Current Past Due; $1,000.00</p>
            </div>

            <div className="acc">
              <h4>Pay $500.00 to settle in full</h4>
              <p>Offer valid until March 15, 2025</p>
            </div>

            <div className="row">
              <button className="btn-1">
                <a href="acceptoffer.html">Accept Offer</a>
              </button>
              <button className="btn-2">More Options</button>
            </div>
          </div>

          <div className="credit-card-ly">
            <div className="row">
              <h3>ABC Bank</h3>
              <div className="status default-status">No Offer yet</div>
            </div>

            <div className="acc">
              <h4>Account #1233</h4>
              <p>Current Past Due; $1,000.00</p>
            </div>

            <div className="empty-card-align"></div>

            <div className="row">
              <button className="btn-2">Request Payment Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

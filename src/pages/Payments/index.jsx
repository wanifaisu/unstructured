import React from 'react';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
export default function Payment() {
  return (
    <div className="content">
      <div className="content-box">
        <h3>Accounts</h3>

        <div className="box-containers">
          <div className="account-card-ly">
            <a href="paymenthistoryaccountdetails.html">
              <div className="acc">
                <h4>Account #1233 - ABC Bank</h4>
                <p>Balance $1,000.00</p>
              </div>
            </a>
          </div>

          <div className="account-card-ly">
            <a href="paymenthistoryaccountdetails.html">
              <div className="acc">
                <h4>Account #1233 - ABC Bank</h4>
                <p>Balance $1,000.00</p>
              </div>
            </a>
          </div>

          <div className="account-card-ly">
            <a href="paymenthistoryaccountdetails.html">
              <div className="acc">
                <h4>Account #1233 - ABC Bank</h4>
                <p>Balance $1,000.00</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

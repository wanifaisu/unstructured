import React from 'react';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
import { useSelector } from 'react-redux';
export default function Payment() {
  const userProfile = useSelector((state) => state?.UserDetails?.userAccountDetailsArr);
  return (
    <div className="content">
      <div className="content-box">
        <h3>Accounts</h3>
        {userProfile?.accounts && userProfile?.accounts?.length > 0 ? (
          userProfile?.accounts?.map((item, index) => {
            return (
              <div className="box-containers">
                <div className="account-card-ly">
                  <a href="paymenthistoryaccountdetails.html">
                    <div className="acc">
                      <h4>
                        Account {item?.issuer_account_id} - {item?.bank_name}
                      </h4>
                      <p>Balance ${item?.balance}</p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="box-containers">
            <div className="account-card-ly">
              <h1 style={{ color: 'white' }}>No Accounts Found</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

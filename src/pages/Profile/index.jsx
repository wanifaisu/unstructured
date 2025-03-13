import React from 'react';
import "../../components/Header/header.css";
import "../../components/Header/header_new.css";
export default function Profile() {
  return (
    <div className="content"  >
      <div className="content-box">
        <div className="box-containers">
          <div className="col">
            <div className="acc-info col">
              <h3>Your Information</h3>

              <div className="progress-container">
                <p className="progress-text">
                  Please review and confirm your personal details below
                </p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <p className="progress-step">Step 1 of 3: Confirm</p>
              </div>

              <div className="row">
                <div className="unifi-input-group">
                  <div className="label" for="">
                    First Name
                  </div>
                  <input type="text" id="" placeholder="John" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Last Name
                  </div>
                  <input type="text" id="" placeholder="Doe" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Date of Birth
                  </div>
                  <input
                    type="text"
                    id=""
                    placeholder="MM / DD / YYYY"
                    required
                  />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Email Address
                  </div>
                  <input
                    type="text"
                    id=""
                    placeholder="user@domain.com"
                    required
                  />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Phone Number
                  </div>
                  <input
                    type="text"
                    id=""
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Last 4 Digits
                  </div>
                  <input type="text" id="" placeholder="**** 1234" required />
                </div>
              </div>

              <div className="full-width">
                <div className="unifi-input-group ">
                  <div className="label" for="">
                    Street Address
                  </div>
                  <input
                    type="text"
                    id=""
                    placeholder="123 Main Street"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="unifi-input-group">
                  <div className="label" for="">
                    City
                  </div>
                  <input type="text" id="" placeholder="New York" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    State
                  </div>
                  <input type="text" id="" placeholder="NY" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    ZIP Code
                  </div>
                  <input type="text" id="" placeholder="10001" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Country
                  </div>
                  <input
                    type="text"
                    id=""
                    placeholder="United States"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="alert-notice-light">
              <div className="notice-icon">
                <img src="../media/imgs/caution.svg" alt="" />
              </div>
              <p>
                Your information is encrypted and protected. By submitting this
                dispute, you certify that the information provided is true and
                accurate.
              </p>
            </div>

            <div className="submit-update">
              <button className="btn-default">Save Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

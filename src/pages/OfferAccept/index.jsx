import React from 'react';

import Dopdownarrw from '../../assets/imgs/dropdown-arrw.svg';
import Calander from '../../assets/imgs/calendar.svg';
import Paynow from '../../assets/imgs/paynow.svg';
import CreditCards from '../../assets/imgs/creditcards.png';
import { useLocation } from 'react-router-dom';
// import Dopdownarrw from '../../assets/imgs/creditcards.png';

export default function OfferAccept() {
  const location = useLocation();
  return (
    <div>
      <div className="content">
        <div className="content-box">
          <div className="box-containers">
            <div className="col">
              <div className="acc-info col">
                <h3>Account Information</h3>

                <div className="col">
                  <div className="acc-info-group">
                    <div className="label" for="">
                      Creditor's Name
                    </div>
                    <div className="acc-item">{location?.state?.issuer}</div>
                  </div>
                </div>

                <div className="col">
                  <div className="acc-info-group">
                    <div className="label" for="">
                      Account Number
                    </div>
                    <div className="acc-item">{location?.state?.issuer_account_id}</div>
                  </div>
                </div>

                <div className="col">
                  <div className="acc-info-group">
                    <div className="label" for="">
                      Original Creditor
                    </div>
                    <div className="acc-item">{location?.state?.bank_name}</div>
                  </div>
                </div>
              </div>

              <div className="acc-info col">
                <h3>Your Settlement Offer</h3>

                <div className="row">
                  <div className="box-default unifi-outline">
                    <p className="text-align-center">Original Amount</p>
                    <h2>$5,280.00</h2>
                  </div>

                  <div className="box-default gold">
                    <p className="text-align-center">Settlement Offer</p>
                    <h2>$2,640.00</h2>
                    <span>Save 50%</span>
                  </div>

                  <div className="box-default unifi-outline">
                    <p className="text-align-center">Offer Expires on</p>
                    <h2>Feb. 22, 2025</h2>
                  </div>
                </div>

                <button className="btn-2" style={{ width: '210px', marginTop: '20px' }}>
                  More Options
                </button>
              </div>

              <div className="acc-info col">
                <h3>Payment Methods</h3>

                <div className="row">
                  <div className="accepted-cards">
                    <div className="card-opts">
                      <div className="radio-container">
                        <label className="radio-label">
                          <input type="radio" name="option" value="option1" />
                          <span className="custom-radio"></span>
                          Credit/Debit Card
                        </label>
                      </div>
                    </div>

                    <div className="card-brands">
                      <img src={CreditCards} alt="" />
                    </div>
                  </div>

                  <div className="accepted-cards">
                    <div className="card-opts">
                      <div className="radio-container">
                        <label className="radio-label">
                          <input type="radio" name="option" value="option1" />
                          <span className="custom-radio"></span>
                          Bank Transfer (ACH)
                        </label>
                      </div>
                    </div>

                    <div className="card-brands">
                      <img src={CreditCards} alt="" />
                    </div>
                  </div>

                  <div className="accepted-cards">
                    <div className="card-opts">
                      <div className="radio-container">
                        <label className="radio-label">
                          <input type="radio" name="option" value="option1" />
                          <span className="custom-radio"></span>
                          Digital Wallet
                        </label>
                      </div>
                    </div>

                    <div className="card-brands"></div>
                  </div>

                  <div className="unifi-options" style={{ margin: '15px 0px' }}>
                    <label>
                      <input type="checkbox" /> I agree to the Terms & Conditions and authorize this
                      payment
                    </label>
                  </div>
                </div>

                <button className="btn-2">Accept Offer & Pay Now</button>
                <button className="btn-1">Request Payment Extension</button>
              </div>

              <div className="acc-info col">
                <h3>Other Options</h3>

                <div className="row">
                  <div className="toggle-switch">
                    <div className="icon-title">
                      <div className="toggle-icon">
                        <img src={Paynow} alt="" />
                      </div>

                      <div className="toggle-title">
                        <div className="title">Lump Sum Payment</div>
                        <p>Pay $2,640.00 now</p>
                      </div>
                    </div>

                    <div className="toggle-icon">
                      <img src={Dopdownarrw} alt="" />
                    </div>
                  </div>

                  <div className="toggle-switch">
                    <div className="icon-title">
                      <div className="toggle-icon">
                        <img src={Calander} alt="" />
                      </div>

                      <div className="toggle-title">
                        <div className="title">Lump Sum Payment</div>
                        <p>Pay $2,640.00 now</p>
                      </div>
                    </div>

                    <div className="toggle-icon">
                      <img src={Dopdownarrw} alt="" />
                    </div>
                  </div>

                  <div className="toggle-switch">
                    <div className="icon-title">
                      <div className="toggle-icon">
                        <img src={Calander} alt="" />
                      </div>

                      <div className="toggle-title">
                        <div className="title">Lump Sum Payment</div>
                        <p>Pay $2,640.00 now</p>
                      </div>
                    </div>

                    <div className="toggle-icon">
                      <img src={Dopdownarrw} alt="" />
                    </div>
                  </div>

                  <div className="toggle-switch">
                    <div className="icon-title">
                      <div className="toggle-icon">
                        <img src={Calander} alt="" />
                      </div>

                      <div className="toggle-title">
                        <div className="title">Lump Sum Payment</div>
                        <p>Pay $2,640.00 now</p>
                      </div>
                    </div>

                    <div className="toggle-icon">
                      <img src={Dopdownarrw} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

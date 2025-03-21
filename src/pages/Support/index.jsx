import React from 'react';
import '../../components/Header/header.css';
import Wallet from '../../assets/imgs/wallet.svg';
import MyOffers from '../../assets/imgs/myOffers.svg';
import Dispute from '../../assets/imgs/dispute.svg';
import Email from '../../assets/imgs/email.svg';
import Call from '../../assets/imgs/call.svg';
import Chat from '../../assets/imgs/chat.svg';
import '../../components/Header/header_new.css';

import { useNavigate } from 'react-router-dom';
export default function Support() {
  const navigate = useNavigate();
  const handleNavigate = (row) => {
    if (row === 'Offers') {
      navigate('/');
    } else if (row === 'disputes') {
      navigate('/disputes');
    } else if (row === 'payment_history') {
      navigate('/payment_history');
    }
  };
  return (
    <div class="content ">
      <div class="content-box">
        <div class="box-containers">
          <div class="col">
            <div class="acc-info">
              <div class="col align-center">
                <h2>How Can We Help?</h2>
                <p class="text-align-center">
                  We’re here to support you with your debt management journey. Choose from our
                  various support options below or our self-service tools.
                </p>
              </div>

              <div class="help-notice align-center">
                <div class="notice-icon">
                  <img src="../media/imgs/time.svg" alt="" />
                </div>
                <p>Available Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>

            <div class="acc-info col">
              <div class="row">
                <div class="box-default-support unifi-outline">
                  <div class="support-icon">
                    <img src={Chat} alt="" />
                  </div>
                  <h2>Live Chat</h2>
                  <p>Get instant help from our support team</p>

                  <button class="btn-2">Start Chat</button>
                </div>

                <div class="box-default-support unifi-outline">
                  <div class="support-icon">
                    <img src={Call} alt="" />
                  </div>
                  <h2>Call us</h2>
                  <p>Speak with a representative</p>
                  <button class="btn-2">1-800-123-4567</button>
                </div>

                <div class="box-default-support unifi-outline">
                  <div class="support-icon">
                    <img src={Email} alt="" />
                  </div>
                  <h2>Email Us</h2>
                  <p>We’ll respond within 24 hours</p>
                  <button class="btn-2">Send Email</button>
                </div>
              </div>
            </div>

            <div class="acc-info col">
              <h3>Self-Service Options</h3>

              <div class="row">
                <div class="box-default-support unifi-outline">
                  <a onClick={() => handleNavigate('payment_history')}>
                    <div class="support-icon">
                      <img src={Wallet} alt="" />
                    </div>

                    <p>My Account</p>
                  </a>
                </div>

                <div class="box-default-support unifi-outline">
                  <a onClick={() => handleNavigate('Offers')}>
                    <div class="support-icon">
                      <img src={MyOffers} alt="" />
                    </div>

                    <p>My Offers</p>
                  </a>
                </div>

                <div class="box-default-support unifi-outline">
                  <a onClick={() => handleNavigate('disputes')}>
                    <div class="support-icon">
                      <img src={Dispute} alt="" />
                    </div>

                    <p>Dispute Debt</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

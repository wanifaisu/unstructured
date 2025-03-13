import React from 'react';
import "../../components/Header/header.css";
import "../../components/Header/header_new.css";
export default function Support() {
  return (
    <div class="content " >
      <div class="content-box">
        <div class="box-containers">
          <div class="col">
            <div class="acc-info">
              <div class="col align-center">
                <h2>How Can We Help?</h2>
                <p class="text-align-center">
                  We’re here to support you with your debt management journey.
                  Choose from our various support options below or our
                  self-service tools.
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
                    <img src="../media/imgs/chat.svg" alt="" />
                  </div>
                  <h2>Live Chat</h2>
                  <p>Get instant help from our support team</p>

                  <button class="btn-2">Start Chat</button>
                </div>

                <div class="box-default-support unifi-outline">
                  <div class="support-icon">
                    <img src="../media/imgs/call.svg" alt="" />
                  </div>
                  <h2>Call us</h2>
                  <p>Speak with a representative</p>
                  <button class="btn-2">1-800-123-4567</button>
                </div>

                <div class="box-default-support unifi-outline">
                  <div class="support-icon">
                    <img src="../media/imgs/email.svg" alt="" />
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
                  <a href="paymenthistory.html">
                    <div class="support-icon">
                      <img src="../media/imgs/wallet.svg" alt="" />
                    </div>

                    <p>My Account</p>
                  </a>
                </div>

                <div class="box-default-support unifi-outline">
                  <a href="dashboard.html">
                    <div class="support-icon">
                      <img src="../media/imgs/myOffers.svg" alt="" />
                    </div>

                    <p>My Offers</p>
                  </a>
                </div>

                <div class="box-default-support unifi-outline">
                  <a href="dispute.html">
                    <div class="support-icon">
                      <img src="../media/imgs/dispute.svg" alt="" />
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

import React from 'react';
import "../../components/Header/header.css";
import "../../components/Header/header_new.css";
export default function Disputes() {
  return (
    <div className="content"  >
      <div className="content-box">
        <div className="box-containers">
          <div className="col">
            <div className="acc-info col">
              <h3>Dispute Debt</h3>
              <p>
                If you believe this debt is inaccurate, you have the right to
                dispute it.
              </p>

              <div className="row">
                <div className="box-default unifi-outline">
                  <p>Amount Due</p>
                  <h2>$2,500.00</h2>
                </div>

                <div className="box-default unifi-outline">
                  <p>Creditor</p>
                  <h2>ABC Financial</h2>
                </div>

                <div className="box-default unifi-outline">
                  <p>Account Reference</p>
                  <h2>#REF123456</h2>
                </div>
              </div>
            </div>

            <div className="acc-info col">
              <h3>Details</h3>

              <div className="full-width">
                <div className="unifi-input-group">
                  <div className="label" for="">
                    Full Name
                  </div>
                  <input type="text" id="" placeholder="Fullname" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Account/Reference Number
                  </div>
                  <input type="text" id="" placeholder="#REF1234556" required />
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Reason for Dispute
                  </div>
                  <select name="" id="">
                    <option value="">Select a reason</option>
                  </select>
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Additional Explanation
                  </div>
                  <textarea
                    name=""
                    id=""
                    placeholder="Additional Explanation"
                  ></textarea>
                </div>

                <div className="unifi-input-group">
                  <div className="label" for="">
                    Supporting Documents
                  </div>
                  <div className="browse-files">
                    <div className="file-icon">
                      <img src="../media/imgs/UploadDoc.svg" alt="" />
                    </div>
                    <div className="msg">
                      <p>
                        Drag and drop files here or click to upload Supported
                        formats: PDF, JPG, PNG (Max 10MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert-notice">
              <div className="notice-icon">
                <img src="../media/imgs/privacy.svg" alt="" />
              </div>
              <p>
                Your information is encrypted and protected. By submitting this
                dispute, you certify that the information provided is true and
                accurate.
              </p>
            </div>

            <div className="submit-dispute">
              <p>
                <a href="#">Read about FDCPA rights</a>
              </p>

              <button className="btn-default">Submit Dispute</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

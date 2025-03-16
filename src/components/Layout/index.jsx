import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardId from '../../assets/imgs/dashboard-id.svg';
import DashboardActivemobile from '../../assets/imgs/dashboardActivemobileV.svg';
import DisputeIc from '../../assets/imgs/dispute-ic.svg';
import PaymentHistory from '../../assets/imgs/payment-history.svg';
import Support from '../../assets/imgs/Support.svg';
import User, { default as Profile } from '../../assets/imgs/user.svg';
import Header from '../Header';
export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('');
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);
  const handleNavigate = (row) => {
    if (row === 'Offers') {
      navigate('/');
    } else if (row === 'disputes') {
      navigate('/disputes');
    } else if (row === 'payment_history') {
      navigate('/payment_history');
    } else if (row === 'support') {
      navigate('/support');
    } else if (row === 'profile') {
      navigate('/profile');
    }
  };
  return (
    <div>
      <Header children={children} />

      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-menu">
            <ul>
              <li className={activePath === '/' ? 'active' : ''}>
                <a onClick={() => handleNavigate('Offers')}>
                  <div class="item-icn">
                    <img src={DashboardActivemobile} alt="" />
                  </div>
                  Offers
                </a>
              </li>
              <li className={activePath === '/disputes' ? 'active' : ''}>
                <a onClick={() => handleNavigate('disputes')}>
                  <div className="item-icn">
                    <img src={DisputeIc} alt="" />
                  </div>{' '}
                  Disputes
                </a>
              </li>
              <li className={activePath === '/payment_history' ? 'active' : ''}>
                <a onClick={() => handleNavigate('payment_history')}>
                  <div className="item-icn">
                    <img src={PaymentHistory} alt="" />
                  </div>{' '}
                  Payment History
                </a>
              </li>
              <li className={activePath === '/profile' ? 'active' : ''}>
                <a onClick={() => handleNavigate('profile')}>
                  <div className="item-icn">
                    <img src={Profile} alt="" />
                  </div>{' '}
                  Profile
                </a>
              </li>
              <li className={activePath === '/support' ? 'active' : ''}>
                <a onClick={() => handleNavigate('support')}>
                  <div className="item-icn">
                    <img src={Support} alt="" />
                  </div>{' '}
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div class="sidebar-footer">
            <p>
              <strong>Legal</strong>
            </p>
            <a href="https://structuredsettlement.agency/privacy-policy/">
              Privacy Policy
            </a>
            <a href="https://structuredsettlement.agency/terms-and-conditions/">
              Terms of Use
            </a>
            <a href="https://structuredsettlement.agency/debt-collection-disclaimer/">
              Debt Collection Disclaimer
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="mb-nav-item">
          <a onClick={() => handleNavigate('disputes')}>
            <div className="item-icn">
              <img src={DashboardId} alt="" />
            </div>
            <span>Disputes</span>
          </a>
        </div>
        <div class="mb-nav-item">
          <a onClick={() => handleNavigate('payment_history')}>
            <div className="item-icn">
              <img src={PaymentHistory} alt="" />
            </div>
            <span>Payments</span>
          </a>
        </div>
        <div className="mb-nav-item active">
          <a onClick={() => handleNavigate('Offers')}>
            <div className="item-icn">
              <img src={DashboardActivemobile} alt="" />
            </div>
            <span>Offers</span>
          </a>
        </div>
        <div className="mb-nav-item">
          <a onClick={() => handleNavigate('support')}>
            <div className="item-icn">
              <img src={Support} alt="" />
            </div>
            <span>Support</span>
          </a>
        </div>
        <div className="mb-nav-item">
          <a onClick={() => handleNavigate('profile')}>
            <div className="item-icn">
              <img src={User} alt="" />
            </div>
            <span>Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

// import CrossMenu from "../../assets/imgs/CrossBtn.svg"
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CrossBtn from '../../assets/imgs/CloseBtn.svg';
import DashboardId from '../../assets/imgs/dashboard-id.svg';
import DashboardActiveMobile from '../../assets/imgs/dashboardActivemobileV.svg';
import DisputeIc from '../../assets/imgs/dispute-ic.svg';
import Layout from '../../assets/imgs/logout.svg';
import Menu from '../../assets/imgs/menu.svg';
import Notification from '../../assets/imgs/notification.svg';
import {
  default as PaymentHistory,
  default as Paymenthistory,
} from '../../assets/imgs/payment-history.svg';
import Support from '../../assets/imgs/Support.svg';
import { default as Profile, default as User } from '../../assets/imgs/user.svg';
import { logout } from '../../Redux/slices/authSlice';
import './header.css';
import './header_new.css';
export default function Header({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [activePath, setActivePath] = useState('');
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
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
    } else if ('notification') {
      navigate('/notification');
    }
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <a href="dashboard.html">
            <img src={DashboardId} alt="Structured Settlement" />
          </a>
        </div>

        <div className="nav-menu">
          <div className="notifications">
            <a onClick={() => handleNavigate('notification')}>
              <span className="icon">
                <img src={Notification} alt="Notifications" />
              </span>
              <span className="badge">12</span>
            </a>
          </div>

          <div className="logout">
            <a onClick={handleLogout}>
              <span className="icon">
                <img src={Layout} alt="Logout" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          {!menuOpen ? (
            <div className="mobile-viewmenu-icon-toggle" onClick={() => setMenuOpen(true)}>
              <img src={Menu} alt="Open Menu" />
            </div>
          ) : (
            <div className="menu-close" onClick={() => setMenuOpen(false)}>
              <img src={CrossBtn} alt="Close Menu" />
            </div>
          )}
        </div>
      </div>

      {/* Full-Screen Menu */}
      {menuOpen && (
        <div className="full-screen-menu">
          <div className="menu-content">
            <div>
              <h3 style={{ marginBottom: '2rem' }}>
                <strong>Menu</strong>
              </h3>
              <ul>
                <li>
                  <a
                    onClick={() => handleNavigate('disputes')}
                    className={activePath ? 'active' : ''}
                    style={{ color: '#0a3558', cursor: 'pointer' }}
                  >
                    - Disputes
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleNavigate('payment_history')}
                    className={activePath ? 'active' : ''}
                    style={{ color: '#0a3558', cursor: 'pointer' }}
                  >
                    - Payments
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleNavigate('Offers')}
                    className={activePath ? 'active' : ''}
                    style={{ color: '#0a3558', cursor: 'pointer' }}
                  >
                    - Offers
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleNavigate('support')}
                    className={activePath ? 'active' : ''}
                    style={{ color: '#0a3558', cursor: 'pointer' }}
                  >
                    - Support
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleNavigate('profile')}
                    className={activePath ? 'active' : ''}
                    style={{ color: '#0a3558', cursor: 'pointer' }}
                  >
                    - Profile
                  </a>
                </li>
              </ul>
            </div>
            <div class="sidebar-footer">
              <p>
                <strong>Legal</strong>
              </p>
              <a href="https://structuredsettlement.agency/privacy-policy/">Privacy Policy</a>
              <a href="https://structuredsettlement.agency/terms-and-conditions/">Terms of Use</a>
              <a href="https://structuredsettlement.agency/debt-collection-disclaimer/">
                Debt Collection Disclaimer
              </a>
            </div>
          </div>
        </div>
      )}
      <div class="dashboard">
        <div class="sidebar">
          <div class="sidebar-menu">
            <ul>
              <li class="active">
                <a onClick={() => handleNavigate('Offers')}>
                  <div class="item-icn">
                    <img src={DashboardActiveMobile} alt="" />
                  </div>
                  Offers
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigate('dispute')}>
                  <div class="item-icn">
                    <img src={DisputeIc} alt="" />
                  </div>{' '}
                  Disputes
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigate('paymenthistory')}>
                  <div class="item-icn">
                    <img src={Paymenthistory} alt="" />
                  </div>{' '}
                  Payment History
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigate('profile')}>
                  <div class="item-icn">
                    <img src={Profile} alt="" />
                  </div>{' '}
                  Profile
                </a>
              </li>
              <li>
                <a onClick={() => handleNavigate('support')}>
                  <div class="item-icn">
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
            <a href="https://structuredsettlement.agency/privacy-policy/">Privacy Policy</a>
            <a href="https://structuredsettlement.agency/terms-and-conditions/">Terms of Use</a>
            <a href="https://structuredsettlement.agency/debt-collection-disclaimer/">
              Debt Collection Disclaimer
            </a>
          </div>
        </div>

        <Outlet />
      </div>
      {!menuOpen && (
        <div className="bottom-nav">
          <div className="mb-nav-item">
            <a onClick={() => handleNavigate('disputes')}>
              <div className="item-icn">
                <img src={DisputeIc} alt="" />
              </div>
              <span>Disputes</span>
            </a>
          </div>
          <div className="mb-nav-item">
            <a onClick={() => handleNavigate('paymenthistory')}>
              <div className="item-icn">
                <img src={PaymentHistory} alt="" />
              </div>
              <span>Payments</span>
            </a>
          </div>
          <div className="mb-nav-item active">
            <a onClick={() => handleNavigate('Offers')}>
              <div className="item-icn">
                <img src={DashboardActiveMobile} alt="" />
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
      )}
    </div>
  );
}

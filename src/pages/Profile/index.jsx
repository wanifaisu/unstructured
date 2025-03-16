import React, { useEffect, useState } from 'react';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './profile.css';
import { formatPhoneNumber } from '../../helper';

export default function Profile() {
  const userProfile = useSelector((state) => state?.UserDetails?.userProfileDetails);

  // State to store user details
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Populate state when userProfile is available
  useEffect(() => {
    if (userProfile) {
      setUserDetails((prev) => ({
        ...prev,
        ...userProfile,
        dateOfBirth: userProfile.dateOfBirth
          ? moment(userProfile.dateOfBirth).format('MM-DD-YYYY')
          : '',
      }));
    }
  }, [userProfile]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,

      [name]: value,
    }));

    // Remove error on change
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  // Validate inputs
  const validate = () => {
    let newErrors = {};
    if (!userDetails.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!userDetails.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!userDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userDetails.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!userDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!userDetails.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    console.log(newErrors, 'newErrors');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = () => {
    if (validate()) {
      console.log('Form Submitted Successfully!', userDetails);
    } else {
      console.log('Form has errors.');
    }
  };
  console.log(errors?.firstName, 'errors');
  return (
    <div className="content">
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
                  <div className="label" htmlFor="firstName">
                    First Name
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    required
                  />
                  {errors?.firstName && <p className="errors_text">{errors?.firstName}</p>}
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="lastName">
                    Last Name
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    required
                  />
                  {errors?.lastName && <p className="errors_text">{errors?.lastName}</p>}
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="dateOfBirth">
                    Date of Birth
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.dateOfBirth}
                    type="text"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    placeholder="MM / DD / YYYY"
                    required
                  />
                  {errors?.dateOfBirth && <p className="errors_text">{errors?.dateOfBirth}</p>}
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="email">
                    Email Address
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.email}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="user@domain.com"
                    required
                  />
                  {errors?.email && <p className="errors_text">{errors?.email}</p>}
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="phone">
                    Phone Number
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.phone && formatPhoneNumber(userDetails.phone)}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="(555) 123-4567"
                    required
                  />
                  {errors?.phone && <p className="errors_text">{errors?.phone}</p>}
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="last4Digits">
                    Last 4 Digits
                  </div>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="last4Digits"
                    id="last4Digits"
                    placeholder="**** 1234"
                    required
                  />
                </div>
              </div>

              <div className="full-width">
                <div className="unifi-input-group ">
                  <div className="label" htmlFor="address1">
                    Street Address
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.address1}
                    type="text"
                    name="address1"
                    id="address1"
                    placeholder="123 Main Street"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="unifi-input-group">
                  <div className="label" htmlFor="city">
                    City
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.city}
                    type="text"
                    name="city"
                    id="city"
                    placeholder="New York"
                    required
                  />
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="state">
                    State
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.state}
                    type="text"
                    name="state"
                    id="state"
                    placeholder="NY"
                    required
                  />
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="postalCode">
                    ZIP Code
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.postalCode}
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="10001"
                    required
                  />
                </div>

                <div className="unifi-input-group">
                  <div className="label" htmlFor="country">
                    Country
                  </div>
                  <input
                    onChange={handleChange}
                    value={userDetails.country}
                    type="text"
                    name="country"
                    id="country"
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
                Your information is encrypted and protected. By submitting this dispute, you certify
                that the information provided is true and accurate.
              </p>
            </div>

            <div className="submit-update">
              <button className="btn-default" onClick={handleSubmit}>
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

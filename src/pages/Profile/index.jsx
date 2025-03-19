import React, { useEffect, useState } from 'react';
import '../../components/Header/header.css';
import '../../components/Header/header_new.css';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './profile.css';
import { decryptSSN, formatPhoneNumber, unformatPhoneNumber } from '../../helper';
import CustomInput from '../../components/CustomInput';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Profile() {
  const userProfile = useSelector((state) => state?.UserDetails?.userProfileDetails);
  const userData = useSelector((state) => state?.auth?.userData);
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

  const validate = () => {
    let newErrors = {};

    if (!userDetails?.firstName?.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!userDetails?.lastName?.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!userDetails?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userDetails.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!userDetails?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!userDetails?.dateOfBirth?.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    setErrors(newErrors);
    console.log('Validation Errors:', newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    userDetails.phone = unformatPhoneNumber(userDetails.phone);
    const isValid = validate();
    console.log(isValid, 'userDetails');
    if (isValid) {
      console.log(isValid, 'isValid');
      dispatch(setLoading(true));

      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/update_userDetails`,
          userDetails,
          {
            headers: {
              Authorization: `Bearer ${userData?.token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response?.data?.status) {
          toast.success('User updated Successfully');
        } else {
          toast.error('Error occurred while updating user');
        }
        dispatch(setLoading(false));
      } catch (error) {
        toast.error('Error occurred while updating user');
        dispatch(setLoading(false));
      }
    } else {
      console.log('Form has errors.');
    }
  };
  return (
    <div className="content">
      <div className="content-box">
        <div className="box-containers">
          <form className="form-container" onSubmit={handleSubmit}>
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

                <div className="form-container">
                  <div className="form-grid">
                    <CustomInput
                      label="First Name"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={handleChange}
                      required
                      error={errors.firstName}
                    />
                    <CustomInput
                      label="Last Name"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleChange}
                      required
                      error={errors.lastName}
                    />
                    <CustomInput
                      label="Email Address"
                      name="email"
                      value={userDetails.email}
                      onChange={handleChange}
                      required
                      error={errors.email}
                      type="email"
                    />
                    <CustomInput
                      label="Phone Number"
                      name="phone"
                      value={userDetails.phone && formatPhoneNumber(userDetails.phone)}
                      onChange={handleChange}
                      required
                      error={errors.phone}
                    />
                    <CustomInput
                      label="Last 4 Digits"
                      name="ssn"
                      value={userDetails?.hashedFour}
                      onChange={handleChange}
                      placeholder="****1234"
                      required
                      error={errors.ssn}
                    />
                    <CustomInput
                      label="Street Address"
                      name="streadAdress"
                      value={userDetails?.streadAdress}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                      required
                      error={errors?.streadAdress}
                    />
                    <CustomInput
                      label="City"
                      name="city"
                      value={userDetails?.city}
                      onChange={handleChange}
                      placeholder="New York"
                      required
                      error={errors?.city}
                    />
                    <CustomInput
                      label="State"
                      name="state"
                      value={userDetails?.state}
                      onChange={handleChange}
                      placeholder="NY"
                      required
                      error={errors.state}
                    />
                    <CustomInput
                      label="Zip Code"
                      name="zipcode"
                      value={userDetails?.zipcode}
                      onChange={handleChange}
                      placeholder="10001"
                      required
                      error={errors?.zipcode}
                    />
                    <CustomInput
                      label="Country"
                      name="country"
                      value={userDetails?.country}
                      onChange={handleChange}
                      placeholder="United States"
                      required
                      error={errors?.country}
                    />
                  </div>
                </div>
              </div>

              <div className="alert-notice-light">
                <div className="notice-icon">
                  <img src="../media/imgs/caution.svg" alt="" />
                </div>
                <p>
                  Your information is encrypted and protected. By submitting this dispute, you
                  certify that the information provided is true and accurate.
                </p>
              </div>

              <div className="submit-update">
                <button type="submit" className="btn-default">
                  Save Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

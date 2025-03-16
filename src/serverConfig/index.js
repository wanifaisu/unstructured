import axios from 'axios';

const appServerURL =  import.meta.env.VITE_BASE_URL;

const UnstructuredApi = (config) => {

  // Add default headers to the config
  config.headers = {
    'Content-Type': 'application/json',
   
  };
let token=false
  // Add Authorization header only if the token exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn('Token is missing; requests may fail.');
  }

  // Set the base URL
  config.baseURL = appServerURL;
  console.log('Base URL:', appServerURL); // Debug base URL

  // Add an interceptor for error handling
  axios.interceptors.response.use(
    response => {
      // Return the response if successful
      return response;
    },
    error => {
      if (error.response) {
        console.error('Error Response:', error.response.data); // Debug server errors
        console.error('Status Code:', error.response.status);
      } else {
        console.error('Network Error:', error.message); // Handle network errors
      }

      return Promise.reject(error);
    },
  );
console.log("object")
  // Make the axios request with the provided config
  return axios(config);
};

export default UnstructuredApi;

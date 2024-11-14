import axios from 'axios';

const BASE_URL = "https://7807-120-72-93-91.ngrok-free.app/api/";
const headers = {
  'Content-Type': 'application/json'
};

const createAppointment = async (inputData) => {
  try {
    console.log("request : ", inputData)
    const response = await axios.post(`${BASE_URL}appointment/`, inputData, { headers });
  } catch (error) {
    console.error('API error:', error);
  }
};

const registerUser = async (inputData) => {
  try {
    const response = await axios.post(`${BASE_URL}user/`, inputData, { headers });
  } catch (error) {
    console.error('API error:', error);
  }
};

const getAppointment = async (email) => {
  try {
    let url = `${BASE_URL}appointment/`;
    if (email) {
      url += email.email;
    }
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('API error:', error);
  }
};

export default {
  getAppointment,
  createAppointment,
  registerUser
};

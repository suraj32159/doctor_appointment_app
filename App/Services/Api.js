import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000/api/";
const headers = { 
  'Content-Type': 'application/json'
};

const createAppointment = async (inputData) => {
  const config = {
    headers: headers
  };

  console.log("Request data:", `${BASE_URL}appointment/`, inputData, config);

  try {
    const response = await axios.post(`${BASE_URL}appointment/`, inputData, config);
    console.log("Appointment created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
}

export default {
  createAppointment
};

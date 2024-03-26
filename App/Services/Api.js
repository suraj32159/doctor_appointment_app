import axios from 'axios';

const BASE_URL = "http://10.0.0.2:8000/api/";
const API_KEY = "123";
const headers = API_KEY ? { 
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json' // Added Content-Type header
} : {};

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: headers
});

const createAppointment = (inputData) => AxiosInstance.post("appointment/", inputData).then(response => {
  console.log("Appointment created:", response.data);
  return response.data;
})
.catch(error => {
  console.error("Error creating appointment: ", error);
  throw error;
});

export default {
    createAppointment
};

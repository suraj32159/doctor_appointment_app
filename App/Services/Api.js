const BASE_URL = "http://127.0.0.1:8000/api/"
const API_KEY = ""
const AxiosInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer " + API_KEY
    }
})


const getUser=()=>axios.post(BASE_URL + 'user/', data)
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error("Error sending data: ", error);
});
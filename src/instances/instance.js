import axios from "axios";

const baseURL = "https://job-portal-backend-83iz.onrender.com/api/v1";

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
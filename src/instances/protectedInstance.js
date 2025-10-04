import axios from "axios";
import store from "../redux/store";
import { clearUser } from "../redux/authSlice";

const baseURL = "https://job-portal-backend-83iz.onrender.com/api/v1";

const protectedInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Add response interceptor to handle authentication errors
protectedInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // If we get a 401 or 403 error, clear the user state
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            store.dispatch(clearUser());
            // Only redirect if we're not already on the login page
            if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default protectedInstance;
import { redirect } from "react-router"
import { getMe } from "../services/authServices";
import store from "../redux/store";
import { setUser, clearUser } from "../redux/authSlice";

const authLoader = async () => {
    try {
        const response = await getMe();
        // Update Redux state with authenticated user
        store.dispatch(setUser(response));
        return response;
    } catch (error) {
        console.error('Auth loader error:', error);
        // Clear authentication state on error
        store.dispatch(clearUser());
        return redirect('/login');
    }
}

export default authLoader;
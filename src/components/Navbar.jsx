import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { logoutUser } from "../services/authServices";
import { clearUser } from "../redux/authSlice";

const Navbar = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            dispatch(clearUser());
            toast.success("Logged out successfully");
            // Redirect to login page after logout
            navigate('/login', { replace: true });
        } catch (error) {
            // Even if logout API fails, clear the user state and redirect
            dispatch(clearUser());
            toast.success("Logged out successfully");
            navigate('/login', { replace: true });
        }
    }


    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center h-6">
                    <Link to="/" className="flex-items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">JP</span>
                        </div>
                    </Link>

                    <div>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-blue-600 font-medium"
                        >
                            Home
                        </Link>
                        <div className="inline-block ml-6">
                            {!isAuthenticated ? (
                                <>
                                    <Link
                                        to="/login"
                                        className="ml-6 text-gray-600 hover:text-blue-600 font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="ml-6 text-white bg-blue-600 hover:bg-blue-700 font-medium px-4 py-2 rounded-lg"
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <div
                                    className="relative inline-block text-left"
                                >
                                    <div
                                        className="relative inline-block text-left group"
                                    >
                                        <button
                                            className="w-full px-4 py-2 text-left bg-white hover:bg-gray-100 flex items-center space-x-2 group"
                                        >
                                            <span
                                                className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center">
                                                {user?.name?.charAt(0).toUpperCase()}
                                            </span>
                                            <span
                                                className="font-medium"
                                            >{user?.name}</span>
                                            <span
                                                className="text-sm text-gray-500"
                                            >{user?.role}</span>
                                        </button>

                                        <div
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                                        >
                                            <div
                                                className="py-1"
                                            >
                                                <Link
                                                    to={user?.role === 'admin' ? '/admin/dashboard' : user?.role === 'recruiter' ? '/recruiter/dashboard' : '/dashboard'}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                >
                                                    Dashboard
                                                </Link>
                                                <button
                                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
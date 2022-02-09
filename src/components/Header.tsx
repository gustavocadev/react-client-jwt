import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/UserContext";
import useUser from "../hooks/useUser";

const Header = () => {
    // const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
    const { jwt, setJWT } = useContext(Context);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setJWT("");
        navigate("/login");
    };

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                {jwt === "" ? (
                    <>
                        <Link
                            to="/login"
                            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        >
                            login
                        </Link>

                        <Link
                            to="/signup"
                            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        >
                            signup
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            to="/"
                            className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
                        >
                            home
                        </Link>
                        <button
                            // to="/login"
                            onClick={logout}
                            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        >
                            logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Header;

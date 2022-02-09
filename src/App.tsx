import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Context } from "./context/UserContext";
import Home from "./routes/Home";
import { useState, useContext, useEffect } from "react";
import Signup from "./routes/Signup";
import Login from "./routes/Login";

const App = () => {
    const [jwt, setJWT] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token") ?? "";
        setJWT(token);
    }, []);

    return (
        <Context.Provider value={{ jwt, setJWT }}>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </>
        </Context.Provider>
    );
};

export default App;

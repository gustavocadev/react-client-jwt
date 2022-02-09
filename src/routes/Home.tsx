import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        !localStorage.getItem("token") && navigate("/login");
    }, []);

    return (
        <div>
            <h1>Eso es la home</h1>
        </div>
    );
};

export default Home;

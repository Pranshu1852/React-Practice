import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
    const {authToken,handleLogin}=useAuth();
    const navigate=useNavigate();

    if(authToken) {
        navigate('/');
    }

    return (
        <div>
            <h2>Login {authToken}</h2>
            <button onClick={handleLogin}>Click to login</button>
        </div>
    );
}

export default Login;
import { useLocation, useNavigate } from "react-router-dom"

export default function Login( {onLogin} ){
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/dashboard";

    function handleLogin() {
    onLogin(); // set isAuth = true
    navigate(from, { replace: true }); // prevent going back to login
    }

    return (
        <div className="container py-5">
            <h1>Login</h1>
            <p>Click here to authenticate</p>

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
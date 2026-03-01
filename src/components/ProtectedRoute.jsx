import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ isAuth, children }){
    // Store location 
    const location = useLocation()
    // Navigate to login page if not logged in
    if(!isAuth) {
        return <Navigate  to="/login" replace state={{from: location}} />
    }
    // If logged -> show children
    return children
} 
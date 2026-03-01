import { Navigate, useLocation } from "react-router-dom";

// ProtectedRoutes makes sure only authenticated users can access protected routes
export default function ProtectedRoute({ isAuth, children }){
    // Store location of intended distination  
    const location = useLocation()

    // Navigate to login page  if not logged in
    if(!isAuth) {
        return <Navigate  to="/login" replace state={{from: location}} />
    }
    // If logged -> show children
    return children
} 
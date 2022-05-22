import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";


const PublicRoute = ({ children }) => {
    //const user = false;
    const user = useAuth();
    if (user)
    return <Navigate to='/Favoritos' />
    return children;
};

export default PublicRoute; 
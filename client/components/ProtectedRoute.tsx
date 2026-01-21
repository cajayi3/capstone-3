import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectRoute:React.FC<ProtectedRouteProps> = ({ children })  =>
{
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) return null;

    if (!isSignedIn) {
        return (<Navigate to="Pages/Dashboard" replace state={{ error: "Access Has Been Denied. Please Sign In..."}} />);
    }

    return <> {children} </>
}

export default ProtectRoute;


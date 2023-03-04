import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {

    const isLogin =false
    const Logins = isLogin ? <Outlet /> : <Navigate to="/home" />
    return Logins;
}


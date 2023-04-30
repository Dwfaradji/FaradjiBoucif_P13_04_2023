import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import User from '../Pages/User/User';

const RouteApp = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
debugger
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={isAuthenticated ? <Navigate to="/user" replace={true} /> : <SignIn />} />
            <Route path="/user" element={isAuthenticated ? <User /> : <Navigate to="/signIn" replace={true} />} />
            <Route path="/*" element={<Navigate to="/signIn" replace={true} />} />
        </Routes>

    );
};

export default RouteApp;

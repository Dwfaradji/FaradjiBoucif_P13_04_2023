import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import User from '../Pages/User/User';
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../features/user/userApi";

const RouteApp = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const {token} = useSelector((state) => state.token)
    const dispatch = useDispatch();

    useEffect(() => {
        setIsAuthenticated(!!token);
        if (token) {
            dispatch(getProfile(token));
        }
    }, [isAuthenticated, token, dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signIn" element={isAuthenticated ? <Navigate to="/user" replace={true}/> : <SignIn/>}/>
            <Route path="/user" element={isAuthenticated ? <User/> :
                <Navigate to="/signIn" replace={true}/>}/>
        </Routes>
    );
};

export default RouteApp;

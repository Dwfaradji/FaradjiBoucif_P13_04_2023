import React, {useEffect, useState} from 'react';
import logo from "../../Assets/img/argentBankLogo.png";
import "./NavBar.css"
import {Link} from "react-router-dom";

/**
 *
 * @param {boolean} userLogin
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = ({userLogin}) => {
    const [login, setLogin] = useState(userLogin)

    useEffect(() => {
        const jsonString = localStorage.getItem("active")
        const myObject = JSON.parse(jsonString);
        setLogin(myObject)
    },[])

    const handleLogout = () => {
        localStorage.removeItem('active');
        localStorage.removeItem('token');
        window.location.href = "/"
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {login ? (
                <div>
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </Link>
                    <Link className="main-nav-item" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            ) : (
                <div>
                    <Link className="main-nav-item" to="/signIn">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
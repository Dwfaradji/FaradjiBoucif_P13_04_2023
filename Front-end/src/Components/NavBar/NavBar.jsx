import React, {useEffect, useState} from 'react';
import logo from "../../Assets/img/argentBankLogo.png";
import "./NavBar.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

/**
 *
 * @param {boolean} userLogin
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = ({userLogin}) => {
    const [login, setLogin] = useState(false)
    const {token} = useSelector(state => state.token)
    const {profileInfos} = useSelector((state) => state.infosUser);
    const dispatch = useDispatch()

    useEffect(() => {
        setLogin(token !== null);
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        dispatch({type: "token/setToken", payload: null});
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {login ? (
                <div>
                    {
                        profileInfos &&
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {profileInfos.firstName}
                        </Link>
                    }

                    <Link className="main-nav-item" to="/" onClick={handleLogout}>
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
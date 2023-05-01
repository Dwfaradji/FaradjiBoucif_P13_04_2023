import React, {useState} from 'react';
import  {Login} from "../../Services/CallApi";
import "./SignIn.css"

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await Login(userName, password);
        if (response.status === 200) {
            window.location.href = "/user"
        }
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                    >Remember me</label
                    >
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
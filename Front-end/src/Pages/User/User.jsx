import React, { useState} from 'react';
import "./User.css"
import Account from "../../Components/Account/Account";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, putProfile} from "../../features/counter/counterAPI";

const User = () => {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [edit, setEdit] = useState("")
    const [btnEdit, setBtnEdit] = useState(`edit-button`)
    const {token} = useSelector((state) => state.token);
    const {profileInfos} = useSelector((state) => state.infosUser);
    const dispatch = useDispatch();

    const handleSaveName = (e) => {
        e.preventDefault()
        const user = {
            firstName: userFirstName,
            lastName: userLastName
        }
        if (userFirstName && userLastName ) {
            dispatch(putProfile({token, user}));
            dispatch(getProfile(token));
        }
    };

    const handleEdit = (editBtn) => {
        if (editBtn) {
            setEdit("display")
            setBtnEdit("none")
        } else {
            setEdit("none")
            setBtnEdit("edit-button")
        }
    };
    return (
        <main className="main bg-dark">
            <div className="header">
                {profileInfos &&
                    <h1>Welcome back<br/>{`${profileInfos.firstName} ${profileInfos.lastName}`}!</h1>
                }
                <button className={btnEdit} onClick={() => handleEdit(true)}>Edit Name</button>
                <form className={edit} onSubmit={handleSaveName}>
                    <div className="edit-input">
                        <input type="text" placeholder="Tony"
                               onChange={(e) => setUserFirstName(e.target.value.trim())}/>
                        <input type="text" placeholder="Jarvis"
                               onChange={(e) => setUserLastName(e.target.value.trim())}/>
                    </div>
                    <div className="bloc-button">
                        <button className="edit-button" type="submit" onClick={() => handleEdit(false)}>Save</button>
                        <button className="edit-button" type="reset" onClick={() => handleEdit(false)}>Cancel</button>
                    </div>

                </form>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"}
                     amountDescription={"Available Balance"}/>
            <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"}
                     amountDescription={"Available Balance"}/>
            <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"}
                     amountDescription={"Available Balance"}/>
        </main>
    );
};

export default User;
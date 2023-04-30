import React from 'react';
import "./Account.css"

/**
 *
 * @param {string} title
 * @param {number} amount
 * @param {string} amountDescription
 * @returns {JSX.Element}
 * @constructor
 */
const Account = ({title,amount,amountDescription}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} </h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

export default Account;
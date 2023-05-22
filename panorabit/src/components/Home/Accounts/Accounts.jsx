import React from 'react'
import './Accounts.scss'
import AccountList from './AccountList'

// Renders a centerd div, to display the list of accounts

export default function Accounts() {
    return (
        <div className="container-md pb-3 position-absolute shadow-lg top-50 start-50 translate-middle centered-div">
            <div className="row account-select p-4 text-center">
                <p className="h5">Select an account</p>
            </div>
            <div className="row account-list-wrapper px-3 pe-1">
                <div className="pt-1 justify-content-center account-list">
                    <AccountList />
                </div>
            </div>
        </div>
    )
}

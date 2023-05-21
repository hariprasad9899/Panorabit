import React from 'react'
import './Accounts.scss'
import AccountList from './AccountList'

export default function Accounts() {
    return (
        <div className="container-md position-absolute shadow-lg top-50 start-50 translate-middle centered-div">
            <div className="row account-select p-4 text-center">
                <p className="h5">Select an account</p>
            </div>
            <div className="row px-4 pt-1 justify-content-center account-list">
                <AccountList />
            </div>
        </div>
    )
}

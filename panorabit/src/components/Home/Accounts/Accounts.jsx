import React from 'react'
import './Accounts.scss'
import AccountList from './AccountList'

// Renders a centerd div, to display the list of accounts

export default function Accounts() {
    return (
        <div className="container-fluid">
            <div className="row bg bg-primary">
                <div className="col-sm-7 col-md-6 col-lg-5 pb-3 position-absolute shadow-lg top-50 start-50 translate-middle centered-div">
                    <div className="row account-select p-sm-4 p-md-4 p-lg-5 p-xl-8 text-center">
                        <p className="h5 select-account">Select an account</p>
                    </div>
                    <div className="row account-list-wrapper pe-1">
                        <div className="pt-1 px-5 justify-content-center account-list">
                            <AccountList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default function Accounts() {
//     return (
//         <div className="container  pb-3 position-absolute shadow-lg top-50 start-50 translate-middle centered-div">
//             <div className="row account-select p-4 text-center">
//                 <p className="h5">Select an account</p>
//             </div>
//             <div className="row account-list-wrapper px-3 pe-1">
//                 <div className="pt-1 justify-content-center account-list">
//                     <AccountList />
//                 </div>
//             </div>
//         </div>
//     )
// }

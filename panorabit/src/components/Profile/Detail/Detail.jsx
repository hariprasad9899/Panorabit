import React from 'react'
import TopPane from './TopPane'
import './Details.scss'
import UserInfo from './UserInfo'
import AddressInfo from './AddressInfo'

export default function Detail() {
    return (
        <div className="col-md-9 bg bg-white p-3">
            <TopPane />
            <div className="row row-info-wrapper">
                <UserInfo />
                <AddressInfo />
            </div>
        </div>
    )
}

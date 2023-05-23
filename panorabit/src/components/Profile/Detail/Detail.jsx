import React from 'react'
import TopPane from './TopPane'
import './Details.scss'
import UserInfo from './UserInfo'
import AddressInfo from './AddressInfo'

export default function Detail({ userInfo }) {
    // Top pane info
    const { name, profilepicture } = userInfo

    return (
        <div className="col-md-9 bg bg-white p-3">
            <TopPane name={name} profilepicture={profilepicture} />
            <div className="row row-info-wrapper">
                <UserInfo userInfo={userInfo} />
                <AddressInfo addressInfo={userInfo.address} />
            </div>
        </div>
    )
}

import React from 'react'

export default function AccountItem({ profilepicture, username }) {
    return (
        <div className="row py-1 align-items-center border-bottom border-bottom-primary">
            <div className="col-auto p-0">
                <img src={profilepicture} className="acc-profile-img" />
            </div>
            <span className="col-10 p-2 acc-profile-username">{username}</span>
        </div>
    )
}

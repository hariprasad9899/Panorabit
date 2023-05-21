import React from 'react'

export default function AccountItem({ profilepicture, username }) {
    return (
        <div className="row border-bottom py-1 border-bottom-primary">
            <div className="col-auto bg align-self-center">
                <img src={profilepicture} className="acc-profile-img" />
            </div>
            <div className="col-10 p-0">
                <p className="acc-profile-username">{username}</p>
            </div>
        </div>
    )
}

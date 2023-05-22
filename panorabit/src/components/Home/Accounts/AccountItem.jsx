import React from 'react'
import './AccountItem.scss'
import { NavLink } from 'react-router-dom'

// Pure component: Renders a row with profile picture and username

export default function AccountItem({
    profilepicture,
    username,
    handleClick,
    id,
}) {
    return (
        <NavLink
            onClick={() => handleClick(id)}
            to={`profile/${id}`}
            style={{ textDecoration: 'none', color: 'black' }}
            className="row py-1 align-items-center border-bottom border-bottom-primary account-item"
        >
            <div className="col-auto p-0">
                <img src={profilepicture} className="acc-profile-img" />
            </div>
            <span className="col-10 p-2 acc-profile-username">{username}</span>
        </NavLink>
    )
}

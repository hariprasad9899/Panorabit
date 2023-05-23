import React from 'react'
import './UserInfo.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserInfo({ userInfo }) {
    return (
        <div className="col-md-5 pt-3 user-info">
            <div className="row mb-2 justify-content-center">
                <img
                    className="img-row"
                    src={
                        userInfo.profilepicture ||
                        'https://via.placeholder.com/300'
                    }
                    alt="a person image"
                />
            </div>
            <div className="row justify-content-center text-center">
                <p className="user-name info-val">{userInfo.name || ''}</p>
            </div>
            <div className="row">
                <div className="row">
                    <p className="col-6 text-end info-attr">Username : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.username || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">e-mail : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.email || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">Phone : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.phone || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">Website : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.website || ''}
                    </p>
                </div>
            </div>
            <div className="row text-center">
                <hr className="my-1 m-auto w-50" />
            </div>
            <div className="row text-center">
                <p className="info-attr">Company</p>
            </div>
            <div className="row">
                <div className="row">
                    <p className="col-6 text-end info-attr">Name : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.company.name || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">catchphrase : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.company.catchPhrase || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">bs : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {userInfo.company.bs || ''}
                    </p>
                </div>
            </div>
        </div>
    )
}

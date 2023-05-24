import React from 'react'
import './UserInfo.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserInfo() {
    const { requestedUserInfo: user } = useSelector((state) => state.userInfo)

    return (
        <div className="col-md-5 pt-3 user-info">
            <div className="row mb-2 justify-content-center">
                <img
                    className="img-row"
                    src={
                        user.profilepicture ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCuoop0MD3fNefnFp8SWPdfnsXdOzFBeAQg&usqp=CAU'
                    }
                    alt="a person image"
                />
            </div>
            <div className="row justify-content-center text-center">
                <p className="user-name info-val">{user.name || ''}</p>
            </div>
            <div className="row">
                <div className="row">
                    <p className="col-6 text-end info-attr">Username : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {user.username || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">e-mail : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {user.email || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">Phone : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {user.phone || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">Website : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {user.website || ''}
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
                        {user.company.name || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">catchphrase : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {user.company.catchPhrase || ''}
                    </p>
                </div>
                <div className="row">
                    <p className="col-6 text-end info-attr">bs : </p>
                    <p className="col-6 text-start p-0 info-val">
                        {user.company.bs || ''}
                    </p>
                </div>
            </div>
        </div>
    )
}

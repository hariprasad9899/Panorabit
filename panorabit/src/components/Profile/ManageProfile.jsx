import React from 'react'
import OptionMenu from './Option/OptionMenu'
import Detail from './Detail/Detail'
import './ManageProfile.scss'
import { useSelector } from 'react-redux'

export default function ManageProfile({ userInfo }) {
    return (
        <div className="row p-4 profile-container-wrapper">
            <OptionMenu userInfo={userInfo} />
            <Detail userInfo={userInfo} />
        </div>
    )
}

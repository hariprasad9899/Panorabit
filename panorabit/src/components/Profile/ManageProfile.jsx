import React from 'react'
import OptionMenu from '../Option/OptionMenu'
import Detail from '../Detail/Detail'
import './ManageProfile.scss'

export default function ManageProfile() {


    

    return (
        <div className="row p-4 profile-container-wrapper">
            <OptionMenu />
            <Detail />
        </div>
    )
}

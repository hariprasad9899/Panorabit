import React from 'react'
import './Intro.scss'
import Accounts from '../Accounts/Accounts'
import Wave from '../../../assets/svgs/wave/Wave'

export default function Intro() {
    return (
        <main className="container-fluid p-0 m-0 landing-page">
            <Wave />
            <Accounts />
        </main>
    )
}

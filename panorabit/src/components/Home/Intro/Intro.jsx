import React from 'react'
import './Intro.scss'
import Accounts from '../Accounts/Accounts'
import Wave from '../../../assets/svgs/wave/Wave'
import { useSelector } from 'react-redux'
import ModalSpinner from '../../Utilities/Loaders/ModalSpinner'

export default function Intro() {
    const { loaded } = useSelector((state) => state.userList)

    return (
        <>
            <main className="container-fluid p-0 m-0 landing-page">
                {!loaded ? <ModalSpinner /> : null}
                <>
                    <Wave />
                    <Accounts />
                </>
            </main>
        </>
    )
}

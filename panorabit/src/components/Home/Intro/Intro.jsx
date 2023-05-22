import React from 'react'
import './Intro.scss'
import Accounts from '../Accounts/Accounts'
import Wave from '../../../assets/svgs/wave/Wave'
import { useSelector } from 'react-redux'
import ModalSpinner from '../../Utilities/Loaders/ModalSpinner'

export default function Intro() {
    // get is apiLoaded state from the Redux store
    const apiloaded = useSelector((state) => state.loader.apiLoaded)

    return (
        <>
            <main className="container-fluid p-0 m-0 landing-page">
                {!apiloaded ? <ModalSpinner /> : null}
                <>
                    <Wave />
                    <Accounts />
                </>
            </main>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { json, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { insertUsers } from '../../../reducer/slice/accounts'
import ManageProfile from './ManageProfile'
import { setCurrentID } from '../../../reducer/slice/currentId'
import server from '../../../../server'
import { setUserInfo } from '../../../reducer/slice/userInfo'
import NoPage from '../../Utilities/Loaders/NoPage'
import { fetchUsers } from '../../../reducer/slice/userSlice'
import ModalSpinner from '../../Utilities/Loaders/ModalSpinner'

export default function Profile() {
    let { userId } = useParams()
    const dispatch = useDispatch()
    const currentId = useSelector((state) => state.id.currentId)
    const { requestedUserInfo, isLoading, error } = useSelector(
        (state) => state.userInfo
    )
    const location = useLocation()

    useEffect(() => {
        dispatch(setCurrentID(userId))
    }, [location])

    useEffect(() => {
        try {
            dispatch(setCurrentID(userId))
            dispatch(fetchUsers(`${currentId}`))
        } catch (error) {
            console.error('Error fetching data from panorbit', error)
        }
    }, [currentId])

    if (isLoading) {
        return <ModalSpinner />
    } else {
        return (
            <>
                {currentId > 10 ? (
                    <NoPage />
                ) : (
                    <div className="container-fluid p-2">
                        <ManageProfile userInfo={requestedUserInfo} />
                    </div>
                )}
            </>
        )
    }
}

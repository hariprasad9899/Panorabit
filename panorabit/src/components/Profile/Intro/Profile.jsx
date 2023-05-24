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

export default function Profile() {
    const { userId } = useParams()
    const dispatch = useDispatch()
    const currentUserInfo = useSelector((state) => state.user.userInfo)
    const currentId = useSelector((state) => state.id.currentId)

    useEffect(() => {
        dispatch(setCurrentID(userId))
    }, [userId])

    useEffect(() => {
        const getUsersInfo = async () => {
            try {
                const response = await server.get(`/profile/${currentId}`)
                if (response.status == 200) {
                    let currentUserInfoFromApiData = response.data.users.filter(
                        (item) => {
                            return item.id == currentId
                        }
                    )
                    dispatch(setUserInfo(currentUserInfoFromApiData[0]))
                } else {
                    throw new Error('Error fetching data from panorbit')
                }
            } catch (error) {
                console.error('Error fetching data from panorbit', error)
            }
        }
        getUsersInfo()
    }, [currentId])

    return (
        <>
            {currentId > 10 ? (
                <NoPage />
            ) : (
                <div className="container-fluid p-2">
                    <ManageProfile userInfo={currentUserInfo} />
                </div>
            )}
        </>
    )
}

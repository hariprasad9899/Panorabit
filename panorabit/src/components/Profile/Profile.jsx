import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { json, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { insertUsers } from '../../reducer/slice/accounts'
import ManageProfile from './ManageProfile'
import { setCurrentID } from '../../reducer/slice/currentId'

export default function Profile() {
    const { userId = 1 } = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.account.accountList)
    let singleUserInfo = users[userId - 1]

    useEffect(() => {
        const getUsersInfo = async () => {
            try {
                const response = await axios.get(
                    'https://panorbit.in/api/users.json'
                )
                if (response.status == 200) {
                    dispatch(insertUsers(response.data.users))
                    dispatch(setCurrentID(userId - 1))
                } else {
                    throw new Error('Error fetching data from panorbit')
                }
            } catch (error) {
                console.error('Error fetching data from panorbit', error)
            }
        }
        getUsersInfo()
    }, [])

    return (
        <div className="container-fluid p-2">
            <ManageProfile userInfo={singleUserInfo} />
        </div>
    )
}

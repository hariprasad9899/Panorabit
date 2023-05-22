import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { insertUsers } from '../../reducer/slice/accounts'
import OptionMenu from '../Option/OptionMenu'
import Detail from '../Detail/Detail'
import ManageProfile from './ManageProfile'

export default function Profile() {
    const { userId = 1 } = useParams()
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
                } else {
                    throw new Error('Error fetching data from panorbit')
                }
            } catch (error) {
                console.error('Error fetching data from panorbit', error)
            }
        }
        getUsersInfo()
    }, [userId])

    return (
        <div className="container-fluid p-2">
            {/* <h3>Profile Page and this is id number {userId}</h3>
            <pre>{JSON.stringify(singleUserInfo)}</pre> */}
            <ManageProfile />
        </div>
    )
}

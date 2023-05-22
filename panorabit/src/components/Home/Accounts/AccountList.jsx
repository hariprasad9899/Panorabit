import React, { useEffect } from 'react'
import sample from '../../../mocks/sample'
import axios from 'axios'
import AccountItem from './AccountItem'
import { useSelector, useDispatch } from 'react-redux'
import { insertUsers } from '../../../reducer/slice/accounts'
import { setApiLoaded } from '../../../reducer/slice/Loader'

export default function AccountList() {
    const users = useSelector((state) => state.account.accountList)
    const apiloaded = useSelector((state) => state.loader.apiLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        const getUsersInfo = async () => {
            try {
                const response = await axios.get(
                    'https://panorbit.in/api/users.json'
                )
                if (response.status == 200) {
                    dispatch(setApiLoaded())
                    dispatch(insertUsers(response.data.users))
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
        <div className="account-list-items">
            {users.map((item) => {
                return (
                    <AccountItem
                        key={item.id}
                        profilepicture={item.profilepicture}
                        username={item.username}
                    />
                )
            })}
        </div>
    )
}

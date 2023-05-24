import React, { useEffect } from 'react'
import sample from '../../../mocks/sample'
import axios from 'axios'
import AccountItem from './AccountItem'
import { useSelector, useDispatch } from 'react-redux'
import { insertUsers } from '../../../reducer/slice/accounts'
import { setApiLoaded } from '../../../reducer/slice/Loader'
import { useLocation } from 'react-router-dom'
import server from '../../../../server'
import { setCurrentID } from '../../../reducer/slice/currentId'

// Maps the users data received from API into AccountItem component

export default function AccountList() {
    const users = useSelector((state) => state.account.accountList)
    const apiloaded = useSelector((state) => state.loader.apiLoaded)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const getUsersInfo = async () => {
            try {
                const response = await server.get('/')
                if (response.status == 200) {
                    // Dispatch actions to update Redux store
                    // updating loaded state to true and add data from api to account list)
                    dispatch(setApiLoaded())
                    dispatch(insertUsers(response.data.users))
                } else {
                    throw new Error('Error fetching data from panorbit')
                }
            } catch (error) {
                console.error('Error fetching data from panorbit', error)
            }

            // Non Server
            // try {
            //     const response = await axios.get(
            //         'https://panorbit.in/api/users.json'
            //     )
            //     if (response.status == 200) {
            //         // Dispatch actions to update Redux store
            //         // updating loaded state to true and add data from api to account list)
            //         dispatch(setApiLoaded())
            //         dispatch(insertUsers(response.data.users))
            //     } else {
            //         throw new Error('Error fetching data from panorbit')
            //     }
            // } catch (error) {
            //     console.error('Error fetching data from panorbit', error)
            // }
        }
        // call the function to fetch user data when the component mounts
        getUsersInfo()
    }, [location.key])

    const handleClick = (id) => {
        dispatch(setCurrentID(id))
    }

    return (
        <div className="account-list-items">
            {users.map((item) => {
                return (
                    <AccountItem
                        key={item.id}
                        id={item.id}
                        profilepicture={item.profilepicture}
                        username={item.username}
                        handleClick={handleClick}
                    />
                )
            })}
        </div>
    )
}

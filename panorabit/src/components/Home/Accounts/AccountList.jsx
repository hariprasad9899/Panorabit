import React, { useEffect } from 'react'
import AccountItem from './AccountItem'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setCurrentID } from '../../../reducer/slice/currentId'
import { fetchUserList } from '../../../reducer/slice/userList'

// Maps the users data received from API into AccountItem component

export default function AccountList() {
    const { userList } = useSelector((state) => state.userList)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(fetchUserList('/'))
    }, [location.key])

    const handleClick = (id) => {
        dispatch(setCurrentID(id))
    }

    return (
        <div className="account-list-items">
            {userList.map((item) => {
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

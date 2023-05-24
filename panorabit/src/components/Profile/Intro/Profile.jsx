import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import ManageProfile from './ManageProfile'
import { setCurrentID } from '../../../reducer/slice/currentId'
import NoPage from '../../Utilities/Loaders/NoPage'
import { fetchUsers } from '../../../reducer/slice/userSlice'
import './Profile.scss'
import ProfileSpinner from '../../Utilities/Loaders/ProfileSpinner'

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

    if (currentId > 10) {
        return <NoPage />
    }

    return (
        <div className="container-fluid p-2 profile-component">
            {isLoading ? <ProfileSpinner /> : <ManageProfile />}
        </div>
    )
}

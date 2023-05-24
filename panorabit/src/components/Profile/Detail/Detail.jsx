import React from 'react'
import TopPane from './TopPane'
import './Details.scss'
import UserInfo from './UserInfo'
import AddressInfo from './AddressInfo'
import Empty from './Empty'
import { useSelector } from 'react-redux'

export default function Detail() {
    const { profile } = useSelector((state) => state.menu.menuOptions)

    return (
        <div className="col-md-9 bg bg-white p-3">
            <TopPane />
            <div className="row row-info-wrapper">
                {profile ? (
                    <>
                        <UserInfo />
                        <AddressInfo />
                    </>
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    )
}

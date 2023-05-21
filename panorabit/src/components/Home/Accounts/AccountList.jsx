import React from 'react'
import sample from '../../../mocks/sample'
import AccountItem from './AccountItem'

export default function AccountList() {
    const users = sample.users

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

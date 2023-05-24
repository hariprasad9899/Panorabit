import React from 'react'
import { useSelector } from 'react-redux'

export default function TopPane() {
    const { profile, gallery, todo, posts } = useSelector(
        (state) => state.menu.menuOptions
    )

    const { name, profilepicture } = useSelector(
        (state) => state.userInfo.requestedUserInfo
    )

    // return null
    return (
        <div className="row top-pane align-items-center p-2 border-bottom border-bottom-primary">
            <div className="col-6">
                {profile ? <span className="menu-name">Profile</span> : null}
                {gallery ? <span className="menu-name">Gallery</span> : null}
                {todo ? <span className="menu-name">Todo</span> : null}
                {posts ? <span className="menu-name">Posts</span> : null}
            </div>
            <div className="col-6 text-end">
                <img
                    className="profile-img"
                    src={
                        profilepicture ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCuoop0MD3fNefnFp8SWPdfnsXdOzFBeAQg&usqp=CAU'
                    }
                />
                <span className="user-name ms-1">{name}</span>
            </div>
        </div>
    )
}

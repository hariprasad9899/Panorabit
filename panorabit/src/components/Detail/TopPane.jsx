import React from 'react'
import { useSelector } from 'react-redux'

export default function TopPane() {
    const { profile, gallery, todo, posts } = useSelector(
        (state) => state.menu.menuOptions
    )

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
                    src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                />
                <span className="user-name ms-1">Leanne Graham</span>
            </div>
        </div>
    )
}

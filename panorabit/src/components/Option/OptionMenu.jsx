import React from 'react'
import './OptionMenu.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuState } from '../../reducer/slice/menu'

export default function OptionMenu() {
    const { profile, gallery, todo, posts } = useSelector(
        (state) => state.menu.menuOptions
    )
    const dispatch = useDispatch()

    const handleMenuOption = (menutype) => {
        dispatch(setMenuState(menutype))
    }

    return (
        <div className="col-md-3 option-menu">
            <div className="option-container d-flex align-items-center justify-content-center">
                <div className="row w-75 sidenav text-start p-2">
                    <ul className="list-unstyled p-2">
                        <li
                            className={`w-100 py-2 ${profile ? 'active' : ''}`}
                            onClick={() => handleMenuOption('profile')}
                        >
                            Profile
                        </li>
                        <li
                            className={`w-100 py-2  ${posts ? 'active' : ''}`}
                            onClick={() => handleMenuOption('posts')}
                        >
                            Post
                        </li>
                        <li
                            className={`w-100 py-2 ${gallery ? 'active' : ''}`}
                            onClick={() => handleMenuOption('gallery')}
                        >
                            Gallery
                        </li>
                        <li
                            className={`w-100 border-0 py-2 ${
                                todo ? 'active' : ''
                            }`}
                            onClick={() => handleMenuOption('todo')}
                        >
                            Todo
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './OptionMenu.scss'

export default function OptionMenu() {
    return (
        <div className="col-md-3 option-menu">
            <div className="option-container d-flex align-items-center justify-content-center">
                <div className="row w-75 sidenav text-start p-2">
                    <ul className="list-unstyled p-2">
                        <li className="w-100 py-2 active">Profile</li>
                        <li className="w-100 py-2">Post</li>
                        <li className="w-100 py-2">Gallery</li>
                        <li className="w-100 border-0 py-2">Todo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../reducer/slice/theme'

export default function Home() {
    const dark = useSelector((state) => state.theme.dark)
    const dispatch = useDispatch()

    return (
        <div className="container-md home-page">
            <h1>Hello World</h1>
            <h3>Dark Theme {dark ? 'Enabled' : 'Disabled'}</h3>
            <button
                className="btn btn-primary"
                onClick={() => dispatch(toggle())}
            >
                Toggle Redux State
            </button>
        </div>
    )
}

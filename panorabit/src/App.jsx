import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Route, Router, Routes } from 'react-router-dom'
import Profile from './components/Profile/Intro/Profile'
import { useSelector } from 'react-redux'
import Intro from './components/Home/Intro/Intro'
import NoPage from './components/Utilities/Loaders/NoPage'

function App() {
    const darkTheme = useSelector((state) => state.theme.dark)

    let appTheme = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Intro />}></Route>
                <Route path="profile/:userId" element={<Profile />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    )
}

export default App

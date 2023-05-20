import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Home from './components/Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import { useSelector } from 'react-redux'

function App() {
    const darkTheme = useSelector((state) => state.theme.dark)

    let appTheme = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
    }

    return (
        <main className="container-fluid border" style={appTheme}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<Profile />} />
            </Routes>
        </main>
    )
}

export default App

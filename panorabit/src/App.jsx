import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Home from './components/Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Profile from './components/Profile/Profile'

function App() {
    return (
        <main className="container-fluid border">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<Profile />} />
            </Routes>
        </main>
    )
}

export default App

import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Tour from "./pages/Tours/Tour.jsx";
import Book from "./pages/Book/Book.jsx";
import Individual from "./pages/Individual/Individual.jsx";
import OneTour from "./pages/OneTour/OneTour.jsx";
import Login from "./Auth/Login/Login.jsx";
import Register from "./Auth/Register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import TourForm from "./pages/TourForm/TourForm.jsx";

function App() {

    return (
        <>
            {localStorage.getItem("access_token") ? (
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/tours" element={<Tour/>}/>
                        <Route path="/tours/:id" element={<OneTour/>}/>
                        <Route path="/book" element={<Book/>}/>
                        <Route path="/individual" element={<Individual/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/create" element={<TourForm/>}/>
                    </Routes>
                </Layout>
            ) : (
                <Layout>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </Layout>
            )}

        </>
    )
}

export default App

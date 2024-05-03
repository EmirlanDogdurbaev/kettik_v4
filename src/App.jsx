import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Tour from "./pages/Tours/Tours.jsx";
import Book from "./pages/Book/Book.jsx";
import Individual from "./pages/Individual/Individual.jsx";

function App() {

    return (
        <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tours" element={<Tour />} />
                {/*<Route path="/tours/:id" element={<OneTour />} />*/}
                <Route path="/book" element={<Book />} />
                <Route path="/individual" element={<Individual/>}/>


            </Routes>
        </Layout>
        </>
    )
}

export default App

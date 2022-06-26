import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import FuelQuoteForm from "./pages/FuelQuoteForm";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route path = '/' exact element={<Home />}/>
            <Route path = '/home' element={<Home />}/>
            <Route path = '/FuelQuoteForm' element={<FuelQuoteForm />}/>
            <Route path = '/register' element={<Register />}/>
            <Route path = '/login' element={<Login />}/>
        </Routes>
        </Router>
    )
}

export default App;
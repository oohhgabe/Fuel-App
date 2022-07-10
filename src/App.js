import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import FuelQuoteForm from "./pages/FuelQuoteForm";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import ProfileManagement from "./pages/ProfileManagement"
import PricingModule from "./pages/PricingModule"
import FuelQuoteHistory from "./pages/FuelQuoteHistory";
import Welcome from "./pages/Welcome";

function App() {
    return (
        <Router>
            <Routes>
                <Route path = '/Welcome' element={<Welcome />}/>
            </Routes>
        <Navbar />
        <Routes>
            <Route path = '/' exact element={<Home />}/>
            <Route path = '/home' element={<Home />}/>
            <Route path = '/FuelQuoteForm' element={<FuelQuoteForm />}/>
            <Route path = '/FuelQuoteHistory' element={<FuelQuoteHistory/>}/>
            <Route path = '/ProfileManagement' element={<ProfileManagement />}/>
            <Route path = '/PricingModule' element={<PricingModule />}/>
            <Route path = '/register' element={<RegisterForm />}/>
            <Route path = '/login' element={<LoginForm />}/>
        </Routes>
        </Router>
    )
}

export default App;
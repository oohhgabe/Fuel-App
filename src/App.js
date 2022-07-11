import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import FuelQuoteForm from "./pages/FuelQuoteForm";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/LoginForm";
import ProfileManagement from "./pages/ProfileManagement"
import PricingModule from "./pages/PricingModule"
import FuelQuoteHistory from "./pages/FuelQuoteHistory";
import Welcome from "./pages/Welcome";
import AccountCreated from "./pages/SuccessfulAccount";

function App() {
    return (
        <Router>
            <Routes>
                <Route path = '/Welcome' element={<Welcome />}/>
                <Route path = '/AccountCreated' element={<AccountCreated />}/>
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
            <Route path = '/LoginForm' element={<LoginForm />}/>
        </Routes>
        </Router>
    )
}

export default App;
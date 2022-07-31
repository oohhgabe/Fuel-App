import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const links = [
    { text: 'Home', location: '/home' },
    { text: 'Profile Management', location: '/UnauthAccess' },
    { text: 'Profile', location: '/Profile' },
    { text: 'Pricing Module', location: '/PricingModule' },
    { text: 'Fuel Quote Form', location: '/FuelQuoteForm' },
    { text: 'Fuel Quote History', location: '/FuelQuoteHistory' },
    { text: 'Create an account', location: '/register' },
    { text: 'Login', location: '/LoginForm'},
];
test.each(links) (
    "Check if Navbar has links",
    (link) => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );

        const linkDOM = screen.getByText(link.text);
        expect(linkDOM).toHaveAttribute("href", link.location);
    }
)
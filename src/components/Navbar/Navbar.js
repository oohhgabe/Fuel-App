import React from 'react';
import { Nav, NavLink, NavMenu, Title, Bars, NavButton, NavButtonLink } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Title>
                    Fuel Enterprise
                </Title>
                <Bars />
                <NavMenu>
                    <NavLink to ='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to ='/ProfileManagement' activeStyle>
                        Profile Management
                    </NavLink>
                    <NavLink to = '/PricingModule' activeStyle>
                        Pricing Module
                    </NavLink>
                    <NavLink to = '/FuelQuoteForm' activeStyle>
                        Fuel Quote Form
                    </NavLink>
                    <NavLink to = '/FuelQuoteHistory' activeStyle>
                        Fuel Quote History
                    </NavLink>
                    <NavLink to = '/register' activeStyle>
                        Create an account
                    </NavLink>
                </NavMenu>
                <NavButton>
                    <NavButtonLink to = '/login'>Login</NavButtonLink>
                </NavButton>
            </Nav>
        </>
    )
}

export default Navbar;
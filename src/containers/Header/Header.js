import './Header.css';


import React from 'react'
import { Link } from 'react-router-dom';

const menu = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About Us" },
    { to: "/dashboard", name: "Production" },
    { to: "/service", name: "Service" },
    { to: "/product", name: "Product" },
    { to: "/constructor", name: "Constructor" },
    { to: "/news", name: "News" },
    { to: "/contacts", name: "Contacts" },
]

export const Header = (props) => {
    return (
        <header>
            <div className="container">
                <img src="https://osten-co.uz/images/osten.svg" alt="" className='logo' />
                {menu.map((menu, i) => {
                    return <Link className='me-3 btn fw-bold fs-5' to={menu.to} key={menu.to}>{menu.name}</Link>
                })}

            </div>
        </header>

    )
}

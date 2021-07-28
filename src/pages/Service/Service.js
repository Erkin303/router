import './Service.css';


import React from 'react'

const menu = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About Us" },
    { to: "/dashboard", name: "Production" },
    { to: "/service", name: "Service" },
    { to: "/product", name: "Product" },
    { to: "/constructor", name: "Constructor" },
    { to: "/news", name: "News" },
    { to: "/contacts", name: "Salom" },
]

export const Service = () => {
    return (
        <div className="container">
            <img src="https://osten-co.uz/images/osten.svg" alt="" className='logo' />
            {menu.map((menu, i) => {
                return <h1 className='bg-success fw-bold fs-5 mt-5'>{menu.name}</h1>
            })}

        </div>
    )
}

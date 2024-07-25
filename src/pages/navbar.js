import React from 'react'

export const Navbar = () => {
    return (
        <div className='container_bg'>
            <div className='mx-5 d-flex align-items-center justify-content-between'>
                <div className='logo-nav'>
                    <img src="/logo/Foodie.png" alt="Tooty Foodie Logo" />
                </div>
                <div className='nav-list'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/about">Recipes</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

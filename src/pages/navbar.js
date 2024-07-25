import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export const Navbar = () => {
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    return (
        <div className='container_bg'>
            <div className='mx-5 d-flex align-items-center justify-content-between'>
                <div className='logo-nav'>
                    <img src="/logo/Foodie.png" alt="Tooty Foodie Logo" />
                </div>
                <div className='nav-list'>
                    <ul>
                        <li><a href="/">Home <AddRoundedIcon className='nav_icon' /></a></li>
                        <li><a href="/about">About  <AddRoundedIcon className='nav_icon' /></a></li>
                        <li
                            onMouseEnter={() => setIsSubMenuVisible(true)}
                            onMouseLeave={() => setIsSubMenuVisible(false)}
                            className="has-submenu"
                        >
                            <a href="/recipes">Recipes <AddRoundedIcon className='nav_icon' /></a>
                            {isSubMenuVisible && (
                                <ul className="submenu">
                                    <li><a href="/recipe/nonVeg">Non-Veg Recipes <AddRoundedIcon className='nav_icon' /></a></li>
                                    <li><a href="/recipe/veg">Veg Recipes <AddRoundedIcon className='nav_icon' /></a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="/about">Diet Plan <AddRoundedIcon className='nav_icon' /></a></li>
                        <li><a href="/about">Tips and Ideas <AddRoundedIcon className='nav_icon' /></a></li>
                        <li><a href="/about">Blog <AddRoundedIcon className='nav_icon' /></a></li>
                    </ul>
                </div>
                <div className='nav-btn'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

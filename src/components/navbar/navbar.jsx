import React from 'react';
import style from './navbar.css'
import { HiShoppingCart } from "react-icons/hi";
import {FaUser} from "react-icons/fa";


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navLogo}>
                <p>Shopper</p>
                <ul className={style.navMenu}>
                    <li>Home</li>
                    <li>New</li>
                    <li>Iphone</li>
                    <li>Samsung</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <div className={style.navLoginCart}>
                    <button>Login</button>
                    <HiShoppingCart className="icon"/>
                </div>

            </div>
        </div>
    )
}
export default Navbar;
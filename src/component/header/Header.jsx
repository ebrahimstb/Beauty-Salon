import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import { CgShoppingBag } from "react-icons/cg";
const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>Ashrab store</span>
        </div>

        <div className={css.right}>
            <div className={css.menu}>
            <ul className={css.menu}>
                <li>Collections</li>
                <li>Brands</li>
                <li>new</li>
                <li>Sales</li>
                <li>Eng</li>
            </ul>
            </div>
            <input type="text" className={css.search} placeholder="search..."/>
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header

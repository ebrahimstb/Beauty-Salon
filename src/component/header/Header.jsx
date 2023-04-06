import React, {useState}from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
const Header = () => {

  const [ShowMenu, setShowMenu] =useState(true)
  const toggleMenu = () => {
    setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>Ashrab store</span>
        </div>

        <div className={css.right}>
              <div className={css.bars} onClick={toggleMenu}>
                <GoThreeBars/>
              </div>
            <ul className={css.menu} style={{display: ShowMenu? "none": "inherit"}}>
                <li>Collections</li>
                <li>Brands</li>
                <li>new</li>
                <li>Sales</li>
                <li>Eng</li>
            </ul>
            <input type="text" className={css.search} placeholder="search..."/>
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header

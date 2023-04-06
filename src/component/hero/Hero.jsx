import React from 'react'
import css from "./Hero.module.css"
import HeroImg from "../../assets/hero.png"
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion';

const Hero = () => {

    const transition ={duration: 3, type: "spring"}

  return (
    <div className={css.container}>
        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>seedily say has suitable didposal and buy. Excersice joy man cgils rejoiced.</span>
            </div>
        </div>

        {/* middle side here image */}
        <div className={css.wrapper}>
            <motion.div
            initial={{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
             className={css.bluecircle}
             transition={transition}
             ></motion.div>
            <motion.img 
            transition={transition}
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            src={HeroImg} alt="" width={600} />

            {/*cart div ANIMATIOJN*/}
            <motion.div
            transition={transition}
            initial={{right: "4%"}}
            whileInView={{right: "2%"}}
            className={css.cart2}>
                <RiShoppingBag3Fill/>
                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>

{/* ight side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100K</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
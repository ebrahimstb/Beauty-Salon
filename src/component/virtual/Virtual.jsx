import React from 'react'
import css from "./virtual.module.css"
import Shade  from "../../assets/shade.png";
import Before from "../../assets/before.png"
import After from "../../assets/after.png"
import ReactCompareImage from 'react-compare-image';

const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>Virtual Try-on</span>
            <span>Never Buy the wrong Shade Again</span>
            <span>Try Now!</span>
            <img src={Shade} alt="" />
        </div>

        <div className={css.righ}>
            <div className={css.wrapper}>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
            
        </div>
    </div>
  )
}

export default Virtual
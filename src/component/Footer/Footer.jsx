import React from "react";
import css from "./Footer.module.css"
import Logo  from "../../assets/logo.png";
import { InboxIcon,
         PhoneIcon,
         LocationMarkerIcon,
         LoginIcon,
         UserIcon,
         LinkIcon
} from "@heroicons/react/outline";

const Footer =()=>{
return(
    <div className={css.cFOoterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Blieze</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngline}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue orland, FL 32801</span>
                    </span>
                    <span className={css.pngline}>
                        {" "}
                        <PhoneIcon className={css.icon}/>
                        <a href="tel:+2348144345484">081-443-454-84</a>
                    </span>
                    <span className={css.pngline}>
                        <InboxIcon className={css.icon}/>
                        <a href="blieze:support@bliezeessential.com">support@blieze.com</a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Acccount</span>
                    <span className={css.pngline}>
                        <LoginIcon className={css.icon}/>
                        Sign In
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngline}>
                        <UserIcon className={css.icon}/>
                       <a href="/about">
                        <p>About Us</p>
                       </a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngline}>
                        <LinkIcon className={css.icon}/>
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
            <span>COpyright @2022 by blieze, Inc</span>
            <span>All right reserved.</span>
        </div>
    </div>
);
};
export default Footer
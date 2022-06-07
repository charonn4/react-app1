import React from "react";
import style from "./NavBar.module.css"

const NavBar = () =>{
    return(
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a>Profile</a>
            </div>
            <div className={style.item}>
                <a>Messages</a>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar
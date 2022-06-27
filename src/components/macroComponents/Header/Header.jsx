import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={style.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login/'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
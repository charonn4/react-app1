import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={style.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt=""/>
            <div>
                {props.isAuth
                    ? <div className={style.loginBlockWrap}><div className={style.loginBlock}>{props.login}</div> <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login/'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
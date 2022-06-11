import React from "react";
import style from './RemoveBtn.module.css'

const RemoveBtn = (props) =>{
    return(
        <button className={style.btn}>
            {props.children}
        </button>
    )
}

export default RemoveBtn
import React from "react";
import style from './AddBtn.module.css'

const AddBtn = (props) =>{
    return(
        <button onClick={props.onClick} className={style.btn}>
            {props.children}
        </button>
    )
}

export default AddBtn
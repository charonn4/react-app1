import React from "react";
import style from './Dialogs.module.css'

const Dialogs = (props) =>{
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>Andrey</div>
                <div className={style.dialog}>Vanya</div>
                <div className={style.dialog}>Andrew</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>hi</div>
                <div className={style.message}>how r u?</div>
                <div className={style.message}>fine</div>
            </div>
        </div>
    )
}

export default Dialogs
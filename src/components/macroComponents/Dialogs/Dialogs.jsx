import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={style.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id:1, name: "Kate"},
    {id:2, name: 'Andrew'},
    {id:3, name: 'Mira'},
]

let dialogsElements = dialogsData
    .map( dialog => { <DialogItem name={dialog.name} id={dialog.id}></DialogItem> } )

let messagesData = [
    {id:1, message: "Hi"},
    {id:2, message: 'how r u?'},
    {id:3, message: 'Yea, im fine'},
]

const Dialogs = (props) =>{
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsElements
                }

                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogItem>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}></DialogItem>*/}
            </div>
            <div className={style.messages}>
                {/*<Message message={messagesData[0].message}></Message>*/}
                {/*<Message message={messagesData[1].message}></Message>*/}
                {/*<Message message={messagesData[2].message}></Message>*/}
            </div>
        </div>
    )
}

export default Dialogs
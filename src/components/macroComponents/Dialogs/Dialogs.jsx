import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) =>{
    let dialogsElements = props.dialogs
        .map( d =>  <DialogItem name={d.name} id={d.id}></DialogItem>  )

    let messagesElements = props.messages
        .map( m =>  <Message message={m.message}></Message> )
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
                {
                    messagesElements
                }
                {/*<Message message={messagesData[0].message}></Message>*/}
                {/*<Message message={messagesData[1].message}></Message>*/}
                {/*<Message message={messagesData[2].message}></Message>*/}
            </div>
        </div>
    )
}

export default Dialogs

import React, {useRef} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddContentFormRedux from "../../microComponents/AddContent/AddContent";
import {maxLengthCreator} from "../../../utils/validators/validators";

const Dialogs = (props) =>{
    let dialogsElements = props.dialogs
        .map( d =>  <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}></DialogItem>  )

    let messagesElements = props.messages
        .map( (m) =>  <Message message={m.message} key={m.id}></Message> )

    let newMessageElem = useRef(null)

    let addNewMessage = (values) => {
        props.addMessage(values.newContentText)
    }


    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={style.messages}>
                <div className={style.chatElem}>
                    {
                        messagesElements
                    }
                </div>
                <AddContentFormRedux maxLengthCreatorPosts={maxLengthCreator(20)} onSubmit={addNewMessage} newContentText={props.newMessageText} newContentElem={newMessageElem}
                                     addMessage={props.addMessage} addBtn='Send' pHolder='Введите сообщение'></AddContentFormRedux>
            </div>
        </div>
    )
}

export default Dialogs

import React, {useRef} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddContent from "../../microComponents/AddContent/AddContent";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/state";

const Dialogs = (props) =>{
    let dialogsElements = props.dialogs
        .map( d =>  <DialogItem name={d.name} id={d.id} img={d.img}></DialogItem>  )

    let messagesElements = props.messages
        .map( (m) =>  <Message message={m.message}></Message> )

    let newMessageElem = useRef(null)

    let addContent = () =>{

        if (props.newMessageText.length > 0){
            props.dispatch(addMessageActionCreator())
        }
    }

    let onMessageChange = () =>{
        let text = newMessageElem.current.value
        props.dispatch(updateNewMessageActionCreator(text))
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
                <AddContent onChange={onMessageChange} newContentText={props.newMessageText} newContentElem={newMessageElem} addContent={addContent} addMessage={props.addMessage} addBtn='Send' removeBtn='Clear' pHolder='Введите сообщение'></AddContent>
            </div>
        </div>
    )
}

export default Dialogs

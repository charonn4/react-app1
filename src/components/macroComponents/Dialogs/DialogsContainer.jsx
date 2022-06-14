import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) =>{
    let state = props.store.getState().dialogsPage

    let addContent = () =>{
        if (state.newMessageText.length > 0){
            props.store.dispatch(addMessageActionCreator())
        }
    }

    let onMessageChange = (text) =>{
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return(
       <Dialogs updateNewMessageText={onMessageChange} addMessage={addContent} dialogsPage={state}
                dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer

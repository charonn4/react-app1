import React, {useRef} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddContent from "../../microComponents/AddContent/AddContent";




const Dialogs = (props) =>{
    let dialogsElements = props.dialogs
        .map( d =>  <DialogItem name={d.name} id={d.id} img={d.img}></DialogItem>  )


    let messagesElements = props.messages
        .map( (m) =>  <Message message={m.message}></Message> )

    let newMessageElem = useRef(null)

    let addContent = () =>{
        if (props.newMessageText.length > 0){
            props.addMessage()
        }
    }

    let onMessageChange = () =>{
        let text = newMessageElem.current.value
        props.updateNewMessageText(text)
    }

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
                <div className={style.chatElem}>
                    {
                        messagesElements
                    }
                </div>

                {/*<Message message={messagesData[0].message}></Message>*/}
                {/*<Message message={messagesData[1].message}></Message>*/}
                {/*<Message message={messagesData[2].message}></Message>*/}
                <AddContent onChange={onMessageChange} newContentText={props.newMessageText} newContentElem={newMessageElem} addContent={addContent} addMessage={props.addMessage} addBtn='Send' removeBtn='Clear' pHolder='Введите сообщение'></AddContent>
            </div>
        </div>
    )
}

export default Dialogs

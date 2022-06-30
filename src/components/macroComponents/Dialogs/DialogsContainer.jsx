import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        addMessage: (state) => {
               dispatch(addMessageActionCreator())

        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)

export default DialogsContainer

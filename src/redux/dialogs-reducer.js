const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            // this._callSubscriber(this._state)
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            // this._callSubscriber(this._state)
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})

export default dialogsReducer
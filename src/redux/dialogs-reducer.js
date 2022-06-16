const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: "Kate", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPhc-UqiuZfT4V37eO5MVVvSI3D_tUG5dIQ&usqp=CAU"},
        {id: 2, name: 'Andrew', img:"https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"},
        {id: 3, name: 'Mira', img:"https://abrakadabra.fun/uploads/posts/2021-12/1639216900_1-abrakadabra-fun-p-avatarki-volka-dlya-standoff-1.jpg"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: 'how r u?'},
        {id: 3, message: 'Yea, im fine'},
    ],
    newMessageText: 'test dialog'
}

const dialogsReducer = (state=initialState, action) =>{
    let stateCopy = {
        ...state,
        message: [...state.messages]
    }

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return{
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText : ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})

export default dialogsReducer
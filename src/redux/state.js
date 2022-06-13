const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "first post", likes: 4},
                {id: 2, message: 'second post', likes: 13},
                {id: 3, message: 'third post', likes: 200},
            ],
            newPostText: 'charon4'
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('1')
    },
    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id:4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText:text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageActionCreator = (text) =>({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})


export default store
window.store = store
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "first post", likes: 4},
                {id: 2, message: 'second post', likes: 13},
                {id: 3, message: 'third post', likes: 200},
            ],
            newPostText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}


export default store
window.store = store
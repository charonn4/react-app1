const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: "first post", likes: 4},
        {id: 2, message: 'second post', likes: 13},
        {id: 3, message: 'third post', likes: 200},
    ],
    newPostText: ''
}

const profileReducer = (state= initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            // this._callSubscriber(this._state)
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            // this._callSubscriber(this._state)
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer
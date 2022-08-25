import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: "first post", likes: 4},
        {id: 2, message: 'second post', likes: 13},
        {id: 3, message: 'third post', likes: 200},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state= initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newContentText,
                likes: 0
            }
            return {
                ...state,
                posts:[...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter(p=>p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return{
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}
//action creators
export const addPostActionCreator = (newContentText) => ({type: ADD_POST, newContentText})
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>({type: SET_STATUS, status})
export const deletePost = (postId) =>({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) =>({type: SAVE_PHOTO_SUCCESS, photos})

// thunk creator
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
   try{
       let response = await profileAPI.updateStatus(status)
       if (response.data.resultCode === 0) {
           dispatch(setStatus(status))
       }
   }
   catch (error){
       console.log(error.message)
   }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId))
    }else{
        // let field = response.data.messages[0].toLowerCase().split('->')[1].slice(0, -1)
        // console.log(field)
        // dispatch(stopSubmit('edit-profile', {contacts: {field : response.data.messages[0]} }))
        dispatch(stopSubmit('edit-profile', {_error : response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer
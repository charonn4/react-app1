import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addContent = () =>{
        if (state.profilePage.newPostText.length > 0){
            props.store.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = (text) =>{
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addContent} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer
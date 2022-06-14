import React, {useRef} from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import AddContent from "../../../microComponents/AddContent/AddContent";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likes={p.likes}/> )

    let newPostElem = useRef(null)

    let addContent = () =>{
        if (props.newPostText.length > 0){
            // props.addPost()
            props.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = () =>{
        let text = newPostElem.current.value
        // props.updateNewPostText(text)
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <AddContent onChange={onPostChange} newContentText={props.newPostText} newContentElem={newPostElem} addContent={addContent} addPost={props.addPost} addBtn='Add Post' removeBtn='Remove Post' pHolder='Что у вас нового?'></AddContent>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts
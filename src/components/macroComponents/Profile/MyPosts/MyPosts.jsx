import React, {useRef} from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import AddContentFormRedux from "../../../microComponents/AddContent/AddContent";
import {maxLengthCreator} from "../../../../utils/validators/validators";

const MyPosts = (props) => {
    let postsElements = [...props.posts]
        .reverse()
        .map( p => <Post message={p.message} key={p.id} likes={p.likes}/> )

    let newPostElem = useRef(null)

    let addNewPost = (values) =>{
       props.addPost(values.newContentText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <AddContentFormRedux maxLengthCreatorPosts={maxLengthCreator(10)} onSubmit={addNewPost} newContentText={props.newPostText} newContentElem={newPostElem} addPost={props.addPost} addBtn='Add Post' pHolder='Что у вас нового?'></AddContentFormRedux>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts
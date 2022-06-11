import React, {useRef} from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import AddContent from "../../../microComponents/AddContent/AddContent";



const MyPosts = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likes={p.likes}/> )

    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <AddContent addPost={props.addPost} addBtn='Add Post' removeBtn='Remove Post' pHolder='Что у вас нового?'></AddContent>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts
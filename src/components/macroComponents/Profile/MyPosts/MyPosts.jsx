import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>{
    return(
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>add post</button>
                <button>remove</button>
            </div>
            <div className={style.posts}>
                <Post message='first post' likes='4'/>
                <Post message='second post' likes='12'/>
            </div>
        </div>
    )
}

export default MyPosts
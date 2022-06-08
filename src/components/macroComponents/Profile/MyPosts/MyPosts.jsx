import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, message: "first post", likes:4},
        {id:2, message: 'second post', likes:13},
        {id:3, message: 'third post', likes:200},
    ]

    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>add post</button>
                    <button>remove</button>
                </div>

            </div>
            <div className={style.posts}>
                <Post message={postsData[0].message} likes={postsData[0].likes}/>
                <Post message={postsData[1].message} likes={postsData[1].likes}/>
                <Post message={postsData[2].message} likes={postsData[2].likes}/>
            </div>
        </div>
    )
}

export default MyPosts
import React from "react";
import style from './Post.module.css'

const Post = (props) =>{
    return(
        <div className={style.post}>
            <img src="https://i.pinimg.com/474x/8d/d0/f8/8dd0f8046dfa4ea4aa63a7bc7e426bff.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likes} Like</span>
            </div>
        </div>
        )
}

export default Post
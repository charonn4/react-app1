import React from "react";
import style from './Post.module.css'

const Post = (props) =>{

    // const [like, setLike] = useState(props.likes)
    // // console.log(props.likes+1)
    // const Handler = (e) =>{
    //     like ? setLike(props.likes + 1) : setLike(props.likes - 1)
    //     // console.log(props.likes ? setLike(props.likes + 1) : setLike(props.likes-1))
    // }


    return(
        <div className={style.post}>
            <img src="https://i.pinimg.com/474x/8d/d0/f8/8dd0f8046dfa4ea4aa63a7bc7e426bff.jpg" alt=""/>
            {props.message}
            <div>
                <button className={style.likes}>{props.likes} Like</button>
            </div>
        </div>
        )
}

export default Post
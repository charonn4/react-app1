import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../../redux/state";



const Profile = (props) =>{

    return(
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPosts updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} addPost={props.addPost} posts={props.posts}/>
        </div>
    )
}

export default Profile
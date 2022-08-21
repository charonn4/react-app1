import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                         profile={props.profile} status={props.status} updateStatus={props.updateStatus}></ProfileInfo>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
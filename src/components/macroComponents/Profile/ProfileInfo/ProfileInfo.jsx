import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../../microComponents/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }

    return(
        <div>
            <div className={style.description}>
                <div className={style.avatarWrap}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div className={style.infoAboutUser}>
                    {/*<div className={style.information}>*/}
                    {/*    <span className={style.semibold}>Статус:</span>*/}
                    {/*    <span>{props.profile.aboutMe}</span>*/}
                    {/*</div>*/}
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}></ProfileStatus>
                    <div>
                        <span className={style.subHeaderText}>Основная информация</span>
                        <div className={style.information}>
                            <span className={style.semibold}>Полное имя:</span>
                            <span>{props.profile.fullName}</span>
                        </div>

                    </div>
                    <div>
                        <span className={style.subHeaderText}>Дополнительная информация</span>
                        <div className={style.information}>
                            <span className={style.semibold}>В поисках работы:</span>
                            <span>{props.profile.lookingForAJob ? `Да` : 'Нет'}</span>
                        </div>
                        <div className={style.information}>
                            <span className={style.semibold}>Резюме текст:</span>
                            <span>{props.profile.lookingForAJob ? `${props.profile.lookingForAJobDescription}` : null}</span>
                        </div>
                    </div>
                    <div>
                        <span className={style.subHeaderText}>Контакты</span>
                        <div className={style.information}>
                            <span className={style.semibold}>Facebook:</span>
                            <span>{props.profile.contacts.facebook}</span>
                        </div>
                        <div className={style.information}>
                            <span className={style.semibold}>Github:</span>
                            <span>{props.profile.contacts.github}</span>
                        </div>
                        <div className={style.information}>
                            <span className={style.semibold}>Instagram:</span>
                            <span>{props.profile.contacts.instagram}</span>
                        </div>
                        <div className={style.information}>
                            <span className={style.semibold}>Vk:</span>
                            <span>{props.profile.contacts.vk}</span>
                        </div>
                        <div className={style.information}>
                            <span className={style.semibold}>Twitter:</span>
                            <span>{props.profile.contacts.twitter}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
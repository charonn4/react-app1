import React, {useState} from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../../microComponents/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defUser from './../../../../assets/images/defUser.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) =>{

    let [editMode, setEditMode] = useState(false)

    if(!props.profile){
        return <Preloader/>
    }
    const mainPhotoSelectedOn = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)

        })
    }

    return(
        <div>
            <div className={style.description}>
                <div className={style.avatarWrap}>
                    <img src={props.profile.photos.large || defUser} alt=""/>
                    {props.isOwner && <input type={'file'} onChange={mainPhotoSelectedOn}/>}
                </div>
                <div className={style.infoAndStatus}>
                    <div className={style.statusWrap}>
                        <span className={style.subHeaderText}>Статус:</span>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}></ProfileStatusWithHooks>
                    </div>
                    { editMode
                        ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
                        : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={style.infoAboutUser}>
            {props.isOwner &&  <div><button onClick={props.goToEditMode}>EDIT</button></div>}
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
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
                <div className={style.information}>
                    <span className={style.semibold}>Обо мне:</span>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
            <div>
                <span className={style.subHeaderText}>Контакты</span>
                {Object.keys(props.profile.contacts).map( key =>{
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}



export const Contact = ({contactTitle, contactValue}) =>{
    return (
        <div className={style.information}>
            <span className={style.semibold}>{contactTitle}:</span>
            <span>{contactValue}</span>
        </div>
    )
}

export default ProfileInfo
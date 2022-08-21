import React from "react";
import style from "./ProfileInfo.module.css";
import {CreateField, Input, Textarea} from "../../../microComponents/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({error, ...props}) => {
    return (
        <form onSubmit={ props.handleSubmit } className={style.infoAboutUser}>
            {<div><button>SAVE</button></div>}
            {error
                && <div className={style.formSummaryError}>{error}</div>
            }
            <div>
                <span className={style.subHeaderText}>Основная информация</span>
                <div className={style.information}>
                    <span className={style.semibold}>Полное имя:</span>
                    { CreateField("Full name", "fullName", [], Input) }
                </div>
            </div>
            <div>
                <span className={style.subHeaderText}>Дополнительная информация</span>
                <div className={style.information}>
                    <span className={style.semibold}>В поисках работы:</span>
                    { CreateField("", "lookingForAJob", [], Input, {type:"checkbox"}) }
                </div>
                <div className={style.information}>
                    <span className={style.semibold}>Резюме текст:</span>
                    { CreateField("", "lookingForAJobDescription", [], Textarea) }
                </div>
                <div className={style.information}>
                    <span className={style.semibold}>Обо мне:</span>
                    { CreateField("", "aboutMe", [], Textarea) }
                </div>
            </div>
            <div>
                <span className={style.subHeaderText}>Контакты</span>
                {Object.keys(props.profile.contacts).map( key =>{
                    return <div key={key} className={style.contact}>
                        <span>{key}:{ CreateField(key, "contacts." + key, [], Input, ) }</span>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile',
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm)


export default ProfileDataFormReduxForm
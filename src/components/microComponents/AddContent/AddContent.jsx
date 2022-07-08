import React from "react";
import style from './AddContent.module.css'
import AddBtn from "../AddBtn/AddBtn";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Textarea} from "../FormsControls/FormsControls";
// import RemoveBtn from "../RemoveBtn/RemoveBtn";

const AddContent = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={style.dropPost}>
                <Field validate={[required, props.maxLengthCreatorPosts]} component={Textarea} name='newContentText' ref={props.newContentElem} placeholder={props.pHolder} value={props.newContentText}/>
            </div>
            <div className={style.btnBlock}>
                <AddBtn>{props.addBtn}</AddBtn>
                {/*<RemoveBtn>{props.removeBtn}</RemoveBtn>*/}
            </div>
        </form>
    )
}


const AddContentFormRedux = reduxForm({form: 'AddContent'})(AddContent)



export default AddContentFormRedux
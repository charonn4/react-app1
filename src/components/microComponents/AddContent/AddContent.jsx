import React from "react";
import style from './AddContent.module.css'
import AddBtn from "../AddBtn/AddBtn";
import RemoveBtn from "../RemoveBtn/RemoveBtn";




const AddContent = (props) =>{
    return(
        <div>
            <div className={style.dropPost}>
                <textarea onChange={props.onChange} ref={props.newContentElem} placeholder={props.pHolder} value={props.newContentText} cols="30" rows="10"/>
            </div>
            <div className={style.btnBlock}>
                <AddBtn onClick={props.addContent}>{props.addBtn}</AddBtn>
                <RemoveBtn>{props.removeBtn}</RemoveBtn>
            </div>
        </div>
    )
}

export default AddContent
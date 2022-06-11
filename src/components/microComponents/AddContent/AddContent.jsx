import React, {useRef} from "react";
import style from './AddContent.module.css'
import AddBtn from "../AddBtn/AddBtn";
import RemoveBtn from "../RemoveBtn/RemoveBtn";




const AddContent = (props) =>{

    let newPostElem = useRef(null)


    let addContent = () =>{
        let text = newPostElem.current.value
        props.addPost(text)
        // props.addMessage(text)

    }

    return(
        <div>
            <div className={style.dropPost}>
                <textarea ref={newPostElem} placeholder={props.pHolder} cols="30" rows="10"></textarea>
            </div>
            <div className={style.btnBlock}>
                <AddBtn onClick={addContent}>{props.addBtn}</AddBtn>
                <RemoveBtn>{props.removeBtn}</RemoveBtn>
            </div>
        </div>
    )
}

export default AddContent
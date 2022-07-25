import style from './FormsControls.module.css'
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? `${style.formControl} ${style.error}` : style.formControl}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? `${style.formControl} ${style.error}` : style.formControl}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field validate={validators} placeholder={placeholder} name={name} component={component}
               {...props}/>{text}
    </div>
)
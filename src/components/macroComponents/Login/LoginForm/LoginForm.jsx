import style from './LoginForm.module.css'
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../../../microComponents/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";

const LoginForm = ({handleSubmit, error}) => {

    return (
        <div className={style.formWrap}>
            <form onSubmit={handleSubmit} className={style.form} action="">
                    {CreateField('Email', 'email', [required], Input)}
                    {CreateField('Password', 'password', [required], Input, {type:'password'})}
                    {CreateField(null, 'rememberMe', null, Input, {type:'checkbox'}, 'remember me')}
                {error
                    && <div className={style.formSummaryError}>{error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

export default LoginReduxForm
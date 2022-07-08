import style from './LoginForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../microComponents/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";

const LoginForm = (props) => {

    return (
        <div className={style.formWrap}>
            <form onSubmit={props.handleSubmit} className={style.form} action="">
                <div>
                    <Field validate={[required]} placeholder='Email' name={'email'} component={Input}/>
                </div>
                <div>
                    <Field validate={[required]} placeholder='Password' name={'password'} component={Input} type='password'/>
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={Input}/> Remember me
                </div>
                {props.error
                    && <div className={style.formSummaryError}>{props.error}</div>
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
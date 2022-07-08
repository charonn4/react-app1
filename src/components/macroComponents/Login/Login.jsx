import style from './Login.module.css'
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={style.wrap}>
            <div className={style.networkName}>
                <span>Lay's</span>
            </div>
            <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)
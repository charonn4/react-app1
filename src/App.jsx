import React, { Suspense } from "react";
import './App.css';
import NavBar from "./components/macroComponents/NavBar/NavBar";
import UsersContainer from "./components/macroComponents/Users/UsersContainer";
import News from "./components/macroComponents/News/News";
import Music from "./components/macroComponents/Music/Music";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Settings from "./components/macroComponents/Settings/Settings";
import HeaderContainer from "./components/macroComponents/Header/HeaderContainer";
import Login from "./components/macroComponents/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/microComponents/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/macroComponents/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/macroComponents/Profile/ProfileContainer'));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) =>{
        console.log('some error')
        // console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <div className="content">
                    <NavBar/>
                    <div className="pages">
                        <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route exact path="/" element={<Navigate to={'/profile'} /> } />
                                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                <Route path='/profile' element={<ProfileContainer/>}/>
                                <Route path='/dialogs' element={<DialogsContainer/>}/>
                                <Route path='/users' element={<UsersContainer/>}/>
                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='*' element={<div>404 NOT FOUND</div>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App)

const MainApp = () =>{
 return(
     <BrowserRouter>
         <Provider store={store}>
             <AppContainer/>
         </Provider>
     </BrowserRouter>
 )
}
export default MainApp
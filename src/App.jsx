import React from "react";
import './App.css';
import NavBar from "./components/macroComponents/NavBar/NavBar";
import UsersContainer from "./components/macroComponents/Users/UsersContainer";
import News from "./components/macroComponents/News/News";
import Music from "./components/macroComponents/Music/Music";
import { Route, Routes} from "react-router-dom";
import Settings from "./components/macroComponents/Settings/Settings";
import DialogsContainer from "./components/macroComponents/Dialogs/DialogsContainer";
import ProfileContainer from "./components/macroComponents/Profile/ProfileContainer";
import HeaderContainer from "./components/macroComponents/Header/HeaderContainer";
import Login from "./components/macroComponents/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/microComponents/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
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
                        <Routes>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile/*' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/users/*' element={<UsersContainer/>}/>
                            <Route path='/news/*' element={<News/>}/>
                            <Route path='/music/*' element={<Music/>}/>
                            <Route path='/settings/*' element={<Settings/>}/>
                            <Route path='/login/*' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)


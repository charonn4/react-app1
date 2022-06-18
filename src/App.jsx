import React from "react";
import './App.css';
import Header from "./components/macroComponents/Header/Header";
import NavBar from "./components/macroComponents/NavBar/NavBar";
import Profile from "./components/macroComponents/Profile/Profile";
import UsersContainer from "./components/macroComponents/Users/UsersContainer";
import News from "./components/macroComponents/News/News";
import Music from "./components/macroComponents/Music/Music";
import { Route, Routes} from "react-router-dom";
import Settings from "./components/macroComponents/Settings/Settings";
import DialogsContainer from "./components/macroComponents/Dialogs/DialogsContainer";


const App = (props) => {
    return (

            <div className="App">
                <Header/>
                <div className="content">
                    <NavBar/>
                    <div className="pages">
                        <Routes>
                            <Route path='/profile/*' element={ <Profile/> }/>
                            <Route path='/dialogs/*' element={ <DialogsContainer/> }/>
                            <Route path='/users/*' element={ <UsersContainer/> }/>
                            <Route path='/news/*' element={ <News /> }/>
                            <Route path='/music/*' element={ <Music /> }/>
                            <Route path='/settings/*' element={ <Settings /> }/>
                        </Routes>
                    </div>
                </div>
            </div>

    );
}

export default App;

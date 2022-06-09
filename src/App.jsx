import React from "react";
import './App.css';
import Header from "./components/macroComponents/Header/Header";
import NavBar from "./components/macroComponents/NavBar/NavBar";
import Profile from "./components/macroComponents/Profile/Profile";
import Dialogs from "./components/macroComponents/Dialogs/Dialogs";
import News from "./components/macroComponents/News/News";
import Music from "./components/macroComponents/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/macroComponents/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="content">
                    <NavBar/>
                    <div className="pages">
                        <Routes>
                            <Route path='/profile/*' element={ <Profile posts={props.posts} /> }/>
                            <Route path='/dialogs/*' element={ <Dialogs dialogs={props.dialogs} messages={props.messages} /> }/>
                            <Route path='/news/*' element={ <News /> }/>
                            <Route path='/music/*' element={ <Music /> }/>
                            <Route path='/settings/*' element={ <Settings /> }/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

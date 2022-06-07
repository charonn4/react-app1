import React from "react";
import './App.css';
import Header from "./components/macroComponents/Header/Header";
import NavBar from "./components/macroComponents/NavBar/NavBar";
import Profile from "./components/macroComponents/Profile/Profile";
import Dialogs from "./components/macroComponents/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="content">
                    <NavBar/>
                    <div className="pages">
                        <Routes>
                            <Route path='/profile' element={ <Profile /> }/>
                            <Route path='/dialogs' element={ <Dialogs /> }/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

import React from "react";
import './App.css';
import Header from "./components/macroComponents/Header/Header";
import NavBar from "./components/macroComponents/NavBar/NavBar";
import Profile from "./components/macroComponents/Profile/Profile";

const  App = () => {
  return (
    <div className="App">
        <Header/>
        <div className="content">
            <NavBar/>
            <Profile/>
        </div>
    </div>
  );
}


export default App;

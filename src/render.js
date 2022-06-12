import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App updateNewPostText={updateNewPostText} newPostText={state.profilePage.newPostText} updateNewMessageText={updateNewMessageText} newMessageText={state.dialogsPage.newMessageText} addPost={addPost} addMessage={addMessage} posts={state.profilePage.posts} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />
        </React.StrictMode>
    );
}
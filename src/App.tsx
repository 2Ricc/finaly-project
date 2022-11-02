import React from 'react';
import './App.css';
import {AuthPage} from "./pages/auth-page/auth-page";
import {RegisterPage} from "./pages/registration-page/register-page";


function App() {
    return (
        <div className="App">
            <AuthPage/>
            <RegisterPage/>
        </div>
    );
}

export default App;

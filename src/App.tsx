import React from 'react';
import './App.css';
import {AppView} from "./views/AppView";
import {mainService} from "./machines/Main/Main";

function App() {
    console.log(mainService)
    return (
        <div className="App">
            <AppView/>
        </div>
    );
}

export default App;

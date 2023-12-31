import React from 'react';
import './App.css';
import {MapComponent} from "./components/MapComponent/MapComponent";
import {ButtonComponent} from "./components/ButtonComponent/ButtonComponent";
import {HookUseStateComponent} from "./components/HookUseStateComponent/HookUseStateComponent";
import {FilterComponent} from "./components/FilterComponent/FilterComponent";
import InputComponent from "./components/InputComponent/InputComponent";


function App() {

    const students = [
        {id: 1, name: "John", age: 18},
        {id: 2, name: "Max", age: 19},
        {id: 3, name: "Felix", age: 21},
        {id: 4, name: "Nik", age: 17},
    ]

    return (
        <div className="App">
            {/*<MapComponent students={students}/>*/}
            {/*<ButtonComponent/>*/}
            {/*<HookUseStateComponent/>*/}
            {/*<FilterComponent/>*/}
            <InputComponent/>
        </div>

    );
}

export default App;

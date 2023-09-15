import React from 'react';
import './App.css';
import {MapComponent} from "./components/MapComponent/MapComponent";


function App() {

    const students = [
        {id: 1, name: "John", age: 18},
        {id: 2, name: "Max", age: 19},
        {id: 3, name: "Felix", age: 21},
        {id: 4, name: "Nik", age: 17},
    ]

    return (
        <div className="App">
            <MapComponent students={students}/>
        </div>
    );
}

export default App;

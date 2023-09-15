import React, {useState} from 'react';

export const HookUseStateComponent = () => {

    // let a = 1;

    let [a, setA] = useState(1);

    const onClickHandler = () => {

        setA(++a);
        console.log(a);
    }

    const resetA = () => {
        setA(0);
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={resetA}>0</button>
        </div>
    );
};
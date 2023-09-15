import React from 'react';
import {FilterType} from "./FilterComponent";

type CurrentMoneyType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentPropsType = {
    currentMoney: Array<CurrentMoneyType>
    callback: (filter: FilterType)=>void
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {
                    props.currentMoney.map((item, i) => {
                        return (
                            <li key={i}>
                                <span> {item.banknote} </span>
                                <span> {item.nominal} </span>
                                <span> {item.number} </span>
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={ () => { props.callback('all')} }>All</button>
            <button onClick={ () => { props.callback('dollar')} }>Dollars</button>
            <button onClick={ () => { props.callback('ruble')} }>Rubles</button>
        </>
    );
};
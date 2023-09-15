import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type MapComponentPropsType = {
    students: Array<StudentType>
}

export const MapComponent = (props: MapComponentPropsType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <table>
                {
                    topCars.map((car, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <ul>
                {
                    props.students.map((item) => {
                        return (<li key={item.id}>{item.name} - {item.age}</li>)
                    })
                }
            </ul>
        </>
    );
};
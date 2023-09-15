import React, {MouseEvent} from 'react';

export const ButtonComponent = () => {

    const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello Im Vasya");
    }
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello Im Ivan");
    }

    const onClickHandler = (name: string) => {
        console.log(name);
    }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num: number) => {
        console.log(num)
    }

    const button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const onDelete = (user: string) => {
        console.log("Deleted " + user);
    }


    return (
        <div>
            {/*<button onClick={() => {console.log("Hello!")}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={ () => {onClickHandler("Vasya")} }>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={ () => {onClickHandler("Ivan")} }>MyYouTubeChannel-2</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => {foo2(100200)} }>2</button>*/}
            <Button name={"MyYouTubeChannel-1"} callBack={()=>{button1Foo("Im Vasya", 21)}}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>{button2Foo("Im Ivan", 22)}}/>
            <Button name={"Delete"} callBack={()=>{onDelete("Petr")}}/>
        </div>
    );
};

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
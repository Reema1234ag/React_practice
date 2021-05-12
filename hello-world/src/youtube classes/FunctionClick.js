import React from 'react'
export default function FunctionClick(props) {
    function clickHandler(){
        console.log("buttonClicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>  {/*Avoid () while putting function name bcoz it will treat as 
                                                                    function call here we want handler t be function*/}
            {props.children}
        </div>
    )
}

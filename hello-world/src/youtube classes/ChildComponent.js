import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>{props.greethandler('Child')}}>Greet Parent</button>
        </div>
    )
}

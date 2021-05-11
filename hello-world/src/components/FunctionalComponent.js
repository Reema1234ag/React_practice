import React from 'react'
const css={
        width:"320px",
        height:"340px",
        border:"1px solid black",
        display:"inlineBlock",

        margin:"10px 30px",
        textAlign:"justify",
    
}
const color={
    color:"blue",
}
export default function FunctionalComponent(props){
    return(
        <div style={css}>
       <h4>This is our {props.num} FUNCTIONAL COMPONENT</h4>
       <h1 style={color}>{props.h1}</h1>
       <p>{props.content}</p>
       </div>
    )
}

import React from 'react'
const css={
    width:"320px",
    height:"340px",
    border:"1px solid black",
    display:"inlineBlock",

    margin:"10px 30px",
    textAlign:"justify",

}
/* GETTING DATA THROGH PROPS*/
export class Classcomponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={css}>
            <h4>This is our {this.props.num} Class COMPONENT</h4>
            <h1>{this.props.h1}</h1>
            <p>{this.props.content}</p>
            </div>
        );
    }
}
/* GEETING DATA USING STATE (state actually use to change data if components wants to change their data they recived through props)*/
 export class Classcomponent1 extends React.Component{
     constructor(){
         super()
     }
    render(){
        return(<h2> This is our new class component</h2>
            );
    }
}
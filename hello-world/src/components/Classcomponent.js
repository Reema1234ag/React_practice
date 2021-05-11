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
 export class Classcomponent1 extends React.Component{
     
    render(){
        return(<h2> This is our new class component</h2>
            );
    }
}

/* GEETING DATA USING STATE (state actually use to change data if components wants to change their data they recived through props)*/
export class Classcomponent2 extends React.Component{
    constructor(){
        super();
        this.state={
            roll:1,
            name:"Reema Agrawal",

        }
    }
    updateMe=()=>{
        this.setState({
            roll:2,
            name:"Shivani Agrawal",
        });
    }
    render(){
        return(
            <div>
            <h2>{this.state.roll}</h2>
            <h2>{this.state.name}</h2>
            <button onClick={this.updateMe}>Update Me</button>
            </div>
        );
    }
}

/* GEETING DATA USING props and updating using setstate*/
export class Classcomponent3 extends React.Component{
    constructor(props){
        super(props);
        this.state={                                             /*here props data will be copied in state and then set state will update that*/
            roll:this.props.roll,
            name:this.props.name,

        }
    }
    updateMe=()=>{
        this.setState({
            roll:5,
            name:"Reema Agrawal",
        });
    }
    render(){
        return(
            <div>
            <h2>{this.state.roll}</h2>
            <h2>{this.state.name}</h2>
            <button onClick={this.updateMe}>Update Me</button>
            </div>
        );
    }
}
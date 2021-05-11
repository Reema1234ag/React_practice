import React from 'react'

export class VT extends React.Component{
    constructor(){
        super();
        this.state={
            h:"Welcome Visitor",
        }
    }
    update=()=>{
        this.setState({
            h:"Thank you for suscribing",
        });
    }
    render(){
        return(
            <div>
            <h1>{this.state.h}</h1>
            <button onClick={this.update}>Suscribe</button>
            </div>
        )
    }
}
import React, { Component } from 'react'

//1. if/else
export class ConditionalRandering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Isloggedin: false,
        }
    }
    
    render() {
        if(this.state.Isloggedin){
            return(
                <h2>Hello Reema</h2>
            )
        }
        else{
            return (
                 <h2>Hello User</h2> 
            )
        }
       
    }
}
//2.element variable
export class ConditionalRandering1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Isloggedin: true,
        }
    }
    
    render() {
        let msg
        if(this.state.Isloggedin){
            msg=<h2>Hello Reema</h2>
        }
        else{
            msg= <h2>Hello User</h2> 
        }
       return(
           <div>{msg}</div>
       )
    }
}
//3.short circuit operator
export class ConditionalRandering2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Isloggedin: true,
        }
    }
    
    render() {
        
        return(this.state.Isloggedin && <h2>Hello Reema</h2> )
    }
}
//4.ternary operator
export class ConditionalRandering3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Isloggedin: true,
        }
    }
    
    render() {
        return(
        this.state.Isloggedin?
        <h2>Hello Reema</h2>:<h2>Hello User</h2> 
            
        )
    }
}
        


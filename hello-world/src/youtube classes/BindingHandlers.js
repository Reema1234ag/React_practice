import React, { Component } from 'react'
const btn={
    width:"100px",
    height:"40px",
    padding:"8px",
    backgroundColor:"indianred",
    color:"white",
    borderRadius:"12px",
    fontSize:"20px"
}


export  class ClassClick extends Component {                //simple event handling in class compo.
    clickHandler(){
        console.log("Clicked the button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
                {this.props.children}
            </div>
        )
    }
}



//binding handlers in 4 ways------------
//1st way- it could be troublesome in large applications .
export class BindingHandlers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           message:"Hello",  
        }
    }
    clickHandler(){
        this.setState({
            message:"how r u?"
        })
        //console.log(this)                   //undefined ('this' keyword is undefined in event handlers 
    }
                
    render() {
        return (
            <div>
            <h3>using 1st Way</h3>
            <h2>{this.state.message}</h2>
            <button style={btn} onClick={this.clickHandler.bind(this)}>Click</button>               {/*Here*/}
            </div>
        )
    }
}

//2nd way- use arrow function(calling the event handlers in the arrow function body)
export class BindingHandlers1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           message:"Hello",  
        }
    }
    clickHandler(){
        this.setState({
            message:"how r u?"
        })
    }
                
    render() {
        return (
            <div>
            <h3>using 2nd Way</h3>
            <h2>{this.state.message}</h2>
            <button style={btn} onClick={()=>{this.clickHandler()}}>Click</button>              {/*here*/}
            </div>
        )
    }
}


//3rd way-inside constructor
export class BindingHandlers2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           message:"Hello",  
        }
        this.clickHandler=this.clickHandler.bind(this)              //Here
    }
    clickHandler(){
        this.setState({
            message:"how r u?"
        })
    }
                
    render() {
        return (
            <div>
            <h3>using 3rd Way</h3>
            <h2>{this.state.message}</h2>
            <button style={btn}  onClick={this.clickHandler}>Click</button>  
            </div>
        )
    }
}


//4th way-- best way(binding as a class property)
export class BindingHandlers3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           message:"Hello",  
        }
    }
    clickHandler=()=>{                                                  //here
        this.setState({
            message:"how r u?"
        })
    }
                
    render() {
        return (
            <div>
            <h3>using 4th Way</h3>
            <h2>{this.state.message}</h2>
            <button style={btn} onClick={this.clickHandler}>Click</button>  
            </div>
        )
    }
}

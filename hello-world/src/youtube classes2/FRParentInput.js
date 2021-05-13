import FRinput from './FRinput'
import React, { Component } from 'react'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()             //1.create Ref 
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
            <FRinput ref={this.inputRef}/>                              {/*2.attach ref in child component*/}
            <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
//3. we need to forward this ref to the input element in child component
//it can be possible to use forward ref method in react library
export default FRParentInput


import React, { Component } from 'react'
//after loading input field to be focused
export class RefsDemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    onClick=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
               <input type='text' ref={this.inputRef}/> 
               <button onClick={this.onClick}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

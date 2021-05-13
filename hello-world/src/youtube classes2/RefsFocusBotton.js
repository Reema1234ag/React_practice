import React, { Component } from 'react'
import RefsChild from './RefsChild'
//what we are doing here when we click on button in parent component, the input element in child component should recieve the focus
export class RefsFocusBoutton extends Component {
    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <RefsChild ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default RefsFocusBoutton

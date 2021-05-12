import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent',
        }
    }
    greetParent=(childname)=>{
        alert(`Hello ${this.state.parentName} from ${childname}`)           // es6 formate,Also can also use this("Hello"+ this.state.parentName)
    }
    render() {
        return (
            <div>
               <ChildComponent greethandler={this.greetParent}/> 
            </div>
        )
    }
}

export default ParentComponent

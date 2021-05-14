import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
//here we will comsume the value through context-type property
class ComponentD extends Component {
    render() {
        return (
            <div>
                <h2>Hello using Content-type{this.context} </h2>
             <ComponentF/>   
            </div>
        )
    }
}
ComponentD.contextType=UserContext
export default ComponentD

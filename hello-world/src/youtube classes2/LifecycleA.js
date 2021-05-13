import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Reema"
        }
        console.log("LifecycleA constructor")
        }
        static getDerivedStateFromProps(pros,state){
            console.log("LifecycleA  getDerivedStateFromProps")
            return null
        }
    componentDidMount(){
        console.log(" LifecycleA componentDidMount")
    }
    
    render(){
        console.log("LifecycleA render") 
        return (
            <div>
              <h2>LifecycleA</h2>
              <LifecycleB/> 
            </div>
        )
        }
}

//check order in console
//child component after render and before componentDidMount

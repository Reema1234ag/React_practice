import React, { Component } from 'react'

export default class LifecycleB1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Reema"
        }
        console.log("LifecycleB1 constructor")
        }
    static getDerivedStateFromProps(pros,state)
    {
            console.log("LifecycleB1  getDerivedStateFromProps")
            return null
    }
        
    componentDidMount(){
        console.log(" LifecycleB1 componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecycleB1 shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleB1 getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleB1 componentDidUpdate ")
    }
    
    render(){
        console.log("LifecycleB1 render") 
        return (
            <div>
              <h2>LifecycleB1</h2> 
            </div>
        )
        }
}
//child component
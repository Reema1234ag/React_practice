import React, { Component } from 'react'
import LifecycleB1 from './LifecycleB1'

export default class LifecycleA1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Reema"
        }
        console.log("LifecycleA1 constructor")
        }
        componentDidMount(){
            console.log(" LifecycleA1 componentDidMount")
        }

        static getDerivedStateFromProps(pros,state){
            console.log("LifecycleA1  getDerivedStateFromProps")
            return null
        }
        shouldComponentUpdate(){
            console.log("LifecycleA1 shouldComponentUpdate ")
            return true
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log("LifecycleA1 getSnapshotBeforeUpdate")
            return null
        }
        componentDidUpdate(){
            console.log("LifecycleA1 componentDidUpdate ")
        }
    changeState=()=>{
        this.setState({
            name:"How r u? Reema"
        })
    }
    
    render(){
        console.log("LifecycleA1 render") 
        return (
            <div>
              <h2>LifecycleA1</h2>
              <button onClick={this.changeState}>Clike</button>
              <LifecycleB1/> 
            </div>
        )
        }
}
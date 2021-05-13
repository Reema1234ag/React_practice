import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Reema"
        }
        console.log("LifecycleB constructor")
        }
        static getDerivedStateFromProps(pros,state){
            console.log("LifecycleB  getDerivedStateFromProps")
            return null
        }
    componentDidMount(){
        console.log(" LifecycleB componentDidMount")
    }
    
    render(){
        console.log("LifecycleB render") 
        return (
            <div>
              <h2>LifecycleB</h2> 
            </div>
        )
        }
}

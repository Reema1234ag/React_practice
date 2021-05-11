import React, { Component } from 'react'
const btn={
    width:"100px",
    height:"30px",
    padding:"3px",
    backgroundColor:"gray",
    color:"white",
    borderRadius:"8px",
}
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count +1,
        },()=>{
            console.log(this.state.count)        //code placed at callback function that is passed as a 2nd argument to the set state fun.(modified data)                         
        })
        console.log(this.state.count)                       //the console is not giving the updated value (it run first then update)
    }
     render() {
        return (
            <div>
              <h2> count- {this.state.count}</h2>
              <button style={btn} onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
export default Counter


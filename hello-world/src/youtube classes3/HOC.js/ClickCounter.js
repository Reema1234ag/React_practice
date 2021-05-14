import React, { Component } from 'react'
class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
        }
    }
    incrementCount=()=>{
        this.setState({
            count: this.state.count +1
        })
    }
    
    render() {
        const {count}=this.state             //this is called extracting the value of count(now we can place 'count' in place of 'this.state.count')
        return (
            <div>
             <button onClick={this.incrementCount}>Click {count} times</button>   
            </div>
        )
    }
}

export default ClickCounter

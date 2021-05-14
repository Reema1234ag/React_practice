import React, { Component } from 'react'
import UpdatedComponent from './ParentHOC'
class ClickCounter extends Component {
    
    
    render() {
        const {count,incrementCount}=this.props             
        return (
            <div>
             <button onClick={incrementCount}> {this.props.name} Click {count} times</button>   
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)
//exporting higher order component
//exporting original com to hoc
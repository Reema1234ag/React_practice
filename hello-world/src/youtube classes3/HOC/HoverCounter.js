import React, { Component } from 'react'
import UpdatedComponent from './ParentHOC'
class HoverCounter extends Component {
  
    render() {
    
        const {count,incrementCount}=this.props 
        return (
            <div>
                <h2 onMouseOver={incrementCount}>{this.props.name} Hover Heading {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,2)
//exporting higher order component
//exporting original com to hoc

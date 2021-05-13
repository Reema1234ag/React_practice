import React, { Component } from 'react'

export class RegularCom extends Component {
    render() {
        console.log("Regular Component")
        return (
            <div>
               <h3>Regular Component{this.props.name}</h3>
            </div>
        )
    }
}

export default RegularCom

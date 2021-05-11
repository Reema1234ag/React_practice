import React, { Component } from 'react'

export default class DestructingClass extends Component {
    render() {
        const{name,clg}=this.props
        return (
            <div>
                <h2>I am {name} from {clg}</h2>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class DestructingClass extends Component {
    render() {
        return (
            <div>
                <h2>I am {this.props.name} from {this.props.clg}</h2>
            </div>
        )
    }
}

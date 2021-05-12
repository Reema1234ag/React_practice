import React, { Component } from 'react'

export class BindingHandlers extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export  class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked the button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}





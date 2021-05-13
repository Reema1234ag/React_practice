import React, { Component } from 'react'

 class RefsChild extends Component {
     constructor(props) {
         super(props)
        this.inputref= React.createRef()        //creating ref
     }
     focusInput(){
         this.inputref.current.focus()
     }
    render() {
        return (
            <div>
             <input type='text' ref={this.inputref}/>   
            </div>
        )
    }
}

export default RefsChild

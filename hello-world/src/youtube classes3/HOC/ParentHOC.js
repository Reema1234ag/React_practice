import React, { Component } from 'react'


//creating HOC(take common functionalties b/w the components)
const UpdatedComponent=(OriginalComp,incrementNumber)=>{
    
    //let's make the new component
    class NewComponent extends Component{
        constructor(props) {                    //Sharing common functionalities
            super(props)
        
            this.state = {
                 count:0,
            }
        }
        incrementCount=()=>{
            this.setState({
                count: this.state.count + incrementNumber
            })
        }
        render(){
            return <OriginalComp count={this.state.count} incrementCount={this.incrementCount}
            {...this.props}           //using the spread operator to pass the remaining props we are getting from app.js
            />
          
        }
    }
    return NewComponent
}
export default UpdatedComponent
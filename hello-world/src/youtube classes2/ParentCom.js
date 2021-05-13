import React, { Component, PureComponent } from 'react'
import PureCom from './PureCom'
import RegularCom from './RegularCom'

export class ParentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Reema',
        }

    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Reema',
            })
        },2000)
    }
    
    render() {
        console.log("********Parent component********")
        return (
            <div>
                <h3>Parent component{this.state.name}</h3>
               <RegularCom name={this.state.name}/>
               <PureCom name={this.state.name}/> 
            </div>
        )
    }
}

export default ParentCom

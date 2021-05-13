import React, { Component, PureComponent } from 'react'
import MemoCom from './MemoCom'
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
               <RegularCom name={this.state.name}/>         {/* pure component */}
               <PureCom name={this.state.name}/>            {/*pure component*/}
                <MemoCom name={this.state.name}/>            {/*memo component*/}
            </div>
        )
    }
}

export default ParentCom

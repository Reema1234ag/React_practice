import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             comment:"",
             topic:"React",
        }
    }
    handleUsername=(event)=>{
        this.setState({
            username:event.target.value,
        })
    }
    handlerComment=(event)=>{
        this.setState({
             comment:event.target.value,
        })
    }
    handlerTopic=(event)=>{
        this.setState({
             topic:event.target.value,
        })
    }
    handlerSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()                                                      //to prevent default behaviour of submit button(page will not refresh after using this)
    }
    
    
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handlerComment}/>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handlerTopic}>
                        <option>React</option>
                        <option>NodeJS</option>
                        <option>Mongodb</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

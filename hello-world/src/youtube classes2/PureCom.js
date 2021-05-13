import React, { PureComponent } from 'react'

export class PureCom extends PureComponent {
    render() {
        console.log("Puree component")
        return (
            <div>
              <h3> pure component{this.props.name} </h3>
            </div>
        )
    }
}

export default PureCom
//pure components do not re-renders when data is same
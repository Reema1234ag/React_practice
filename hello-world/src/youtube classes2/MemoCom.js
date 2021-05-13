import React from 'react'
function MemoCom(props) {
    console.log("Memo component")
    return (
        <div>
            <h3>Memo Component{props.name} </h3>
        </div>
    )
}

export default React.memo(MemoCom)

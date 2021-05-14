import React from 'react'
import ReactDom from 'react-dom'
export default function PortalDemo() {
    return ReactDom.createPortal(
        <h2>Portal Demo </h2>,
        document.getElementById('portal-root')
        )
}

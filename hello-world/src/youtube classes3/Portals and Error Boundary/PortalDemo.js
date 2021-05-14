import React from 'react'
import ReactDom from 'react-dom'
const css={
    backgroundColor:"yellow",
}
export default function PortalDemo() {
    return ReactDom.createPortal(
        <h2>Portal Demo<span style={css}>(In 'portal-root DOM node)</span></h2>,
        document.getElementById('portal-root')
        )
}

import React from 'react'
import './style.css'
export default function CssWays(props) {   
    let className= props.primary ? 'primary': ''                        //use props also to apply css or not
    return (
        <div>
          <h2 className={`${className} font`}>Stylesheets</h2>                {/*use es6 to add more class names*/}
        </div>
    )
}
//1. css stylesheets(external css above eg)
//2.inline css(use const variable)
//css modules
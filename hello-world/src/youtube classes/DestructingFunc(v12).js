import React from 'react'
//1st way to destructing in functional component
export function Destructing1({name,course,year}) {
    return (
        <div>
          <h2>I am {name} from {course} {year}</h2>  
        </div>
    )
}
//2nd way
export function Destructing2(props) {
    const{name,course,year}=props           //so we extract name course year properties from the props object
    return (
        <div>
          <h2>I am {name} from {course} {year}</h2>  
        </div>
    )
}

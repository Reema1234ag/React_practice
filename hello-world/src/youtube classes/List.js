import React from 'react'
import Person from './Person'

export function List() {
    const name=["Reema","Shivani","Gargi"]
    const nameList=name.map(name => <h2>{name}</h2>)
    return (
        <div>
           {/*<h2>{x[0]}</h2> 
           <h2>{x[1]}</h2> 
    <h2>{x[2]}</h2> */}
        {nameList}
        </div>
    )
}

export  function List1() {
     const persons=[
         {
             id:1,
             name:"Reema",
             Course:"B.tech",
             Skill:"React",
         },
         {
            id:2,
            name:"Prachi",
            Course:"B.tech",
            Skill:"Machine Learning",
        },
        {
            id:3,
            name:"Neha",
            Course:"B.tech",
            Skill:"Android",
        },]
        const personeList= persons.map(person =><Person person={person}/> )     //passing object(person) to another component
    return (
        <div>
          {personeList}
        </div>
    )
}
//this is for rendering person list only
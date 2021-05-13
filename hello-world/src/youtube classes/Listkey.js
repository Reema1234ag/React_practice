import Person from './Person'
import React from 'react'

export default function Listkey() {
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
       const personeList= persons.map(x =><Person key={x.id} person={x}/> )   //providing key to id or it can be anything if the attribute data is unique
   return (
       <div>
         {personeList}
       </div>
   )
}

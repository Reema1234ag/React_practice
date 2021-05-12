import React from 'react'
//for rendering person details
export default function Person(person) {
    return (
        <div>
            <h2> I am {person.name}.I am pursuing {person.Course}. I know {person.Skill} </h2>
        </div>
    )
}

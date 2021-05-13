import React from 'react'
export default function IndexAsKey() {
    const name=["React","Express","NodeJS" ]
       const NameList= name.map((x,index) => <h3 key={index}>{index} {x}</h3> )   //providing key to id or it can be anything if the attribute data is unique
   return (
       <div>
         {NameList}
       </div>
   )
}
//when you donot have any property to make that unique 
//we use index as key.
//but it will cause some serious UI issues
//you can make key as index providing by the follwing condition-
//1.you must not have the items in your list which is unique
//you can't update and modify
//will not be reorderd or filtered

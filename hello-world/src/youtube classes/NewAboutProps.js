import React from 'react'
export const Greet = ()=>{                          /* other way to make functional component(using arrow function)*/
   
        return(
        <div>
            <h2>This is reema</h2>
        </div>
    );
}


export const Greet1 = (props)=>{                          /* recieving props*/
   
    return(
    <div>
        <h2>This is {props.name}</h2> 
        {props.children}                    

    </div>
);
}

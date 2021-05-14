import React from 'react'


const UserContext=React.createContext('Reema Default')    //adding default value if provider is not there
//every context object created with usercontext comes up with a provider and a consumer
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext   //for getting data using context-type property
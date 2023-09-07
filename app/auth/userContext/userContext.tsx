import React, { createContext, useContext, useState } from 'react';

const userContext = createContext();

const UserSessionProvider = ({children}:{children: any}) =>{
    const [userSession, setUserSession] = useState(null)

    const updateUserState = (sessionData: React.SetStateAction<null>) =>{
setUserSession(sessionData)
    } 
    return (
        <userContext.Provider value={{userSession, updateUserState}}>
            {children}
        </userContext.Provider>
    )
}

const useUserContext = () =>{
    const context = useContext(userContext);
    if(context===undefined){
        console.log("Error")
    }
    return context;
}

export {UserSessionProvider, useUserContext };
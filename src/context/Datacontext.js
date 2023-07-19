import {createContext,useState,useEffect} from 'react'


const Datacontext = createContext({})

export const DataProvider = ({children})=>{
    return(
        <Datacontext.Provider value={{

        }}>
            {children}
        </Datacontext.Provider>
    )
}

export default Datacontext;
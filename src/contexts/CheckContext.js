import React, { useReducer, createContext, useEffect } from 'react'
import { CheckReducer } from '../reducers/CheckReducer'

export const CheckContext = createContext()

const CheckContextProvider = (props) => {
    const [checks, dispatch] = useReducer(CheckReducer, [], ()=>{
        const LocalData = localStorage.getItem('checks');
        return LocalData ? JSON.parse(LocalData):[]
    });
    useEffect(() => {
        localStorage.setItem('checks', JSON.stringify(checks))
    }, [checks]);
    return (
        <CheckContext.Provider value={{ checks, dispatch }}>
            {props.children}
        </CheckContext.Provider>
    )
}


export default CheckContextProvider
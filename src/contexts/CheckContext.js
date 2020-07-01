import React, { useReducer, createContext } from 'react'
import {CheckReducer} from '../reducers/CheckReducer'

export const CheckContext = createContext()

const CheckContextProvider = (props) => {
    const [checks, dispatch] = useReducer(CheckReducer, [])
    return (
        <CheckContext.Provider value={{checks, dispatch}}>
            {props.children}
        </CheckContext.Provider>
    )
}


export default CheckContextProvider
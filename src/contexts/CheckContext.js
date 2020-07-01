import React, { useState, createContext } from 'react'
import { v1 as uuidv1 } from 'uuid'

export const CheckContext = createContext()

const CheckContextProvider = (props) => {

    const [checks, setChecks] = useState([
        { id: 1, category: 'product', productName: 'milk', price: 2.99 },
        { id: 2, category: 'product', productName: 'milk', price: 2.99 }
    ])
    const addCheck = (category, productName, price) => {
        setChecks([...checks, {  category, productName, price, id: uuidv1(), }])
    }
    const removeCheck = (id) => {
        setChecks(checks.filter(check => check.id !== id))
    }
    return (
        <CheckContext.Provider value={{checks, addCheck, removeCheck}}>
            {props.children}
        </CheckContext.Provider>
    )
}


export default CheckContextProvider
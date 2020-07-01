import React, { useContext } from 'react'
import { CheckContext } from '../contexts/CheckContext'

const CheckDetails = ({check}) => {
    const { removeCheck } = useContext(CheckContext)
    return (
        <li onClick={() => removeCheck(check.id)}>
            <div className="title">{check.category}</div>
            <div className='author'>{check.productName}</div>
            <div>{check.price}</div>
        </li>
    )
}

export default CheckDetails
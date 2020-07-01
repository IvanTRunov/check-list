import React, { useContext } from 'react'
import { CheckContext } from '../contexts/CheckContext'

const CheckDetails = ({ check }) => {
    const { dispatch } = useContext(CheckContext)
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_CHECK', id: check.id })}>
            <div className="title">{check.category}</div>
            <div className='author'>{check.productName}</div>
            <div>{check.price}</div>
        </li>
    )
}

export default CheckDetails
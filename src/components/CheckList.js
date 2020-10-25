import React, { useContext } from 'react'
import { CheckContext } from '../contexts/CheckContext'
import CheckDetails from './CheckDetails'

const CheckList = () => {
    const { checks } = useContext(CheckContext)
    return checks.length ? (
        <div className='book-list'>
            <ul>
                {checks.map(check => {
                    return (<CheckDetails check={check} key={check.id} />)
                })}
            </ul>
        </div>
    ) : (
            <div className='empty'>no item to buy, relax;)</div>
        )
}

export default CheckList
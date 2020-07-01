import React, { useContext, useState } from 'react'
import { CheckContext } from '../contexts/CheckContext'

const NewCheckForm = () => {
    const { dispatch } = useContext(CheckContext);
    const [category, setCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type:'ADD_CHECK', check:{
                category, productName, price
            }
        })
        setCategory(''); setProductName(''); setPrice('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setCategory(e.target.value)} placeholder='...category' value={category} required />
                <input type='text' onChange={(e) => setProductName(e.target.value)} placeholder='...productName' value={productName} required />
                <input type='text' onChange={(e) => setPrice(e.target.value)} placeholder='...price' value={price} required />
                <input type='submit' value='ad check' />
            </form>
        </div>

    )
}


export default NewCheckForm
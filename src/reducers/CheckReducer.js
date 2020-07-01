import { v1 as uuidv1 } from 'uuid'

export const CheckReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CHECK':
            return [...state, {
                category: action.check.category,
                productName: action.check.productName,
                price: action.check.price,
                id: uuidv1()
            }]
        case 'REMOVE_CHECK':
            return state.filter(check => check.id !== action.id)
        default:
            return state
    }
}
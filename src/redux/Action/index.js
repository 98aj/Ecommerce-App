//add item to cart

export const addToCart = (product)=>{
    return{
        type: 'ADDITEM',
        payload: product
    }
}

// Delete from cart

export const deleteCart = (product)=>{
    return{
        type: 'DELITEM',
        payload: product
    }
}

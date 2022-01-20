// for add item cart

export const addCart = (product) =>{
    return {
        type : "ADDITEM",
        payload : product
    }
}

// for delete item from cart

export const delCart = (product) => {
    return {
        type : "DELEITEM",
        payload : product
    }
}












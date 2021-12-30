
export const saveLastIterestProduct = (productName) => {
    // API LocalStorage / SessionStorage
    sessionStorage.setItem('lastProduct', productName)
}; 
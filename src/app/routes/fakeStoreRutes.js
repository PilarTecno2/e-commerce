const baseUrl = process.env.REACT_APP_FAKE_STORE_API
const productsUrl = `${baseUrl}/products`

const routes = {
    getAllproducts: () => productsUrl,
    getProductsById: (idProducts) => `${baseUrl}/${idProducts}`,
    newProduct: () => productsUrl
}

export default routes;
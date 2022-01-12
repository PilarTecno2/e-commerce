import routes from "../routes/fakeStoreRutes"
import api from "../clients/api"


export const getAllProducts = async () => {
    return api.get(routes.getAllProducts())
};

export const getProductById = async (idProducts) => {
    return api.get (routes.getProductsById(idProducts))
};

export const addNewProduct = async (product) => {
    return api.post(routes.addNewProduct(), product)
} 





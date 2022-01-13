import db from "../db/db"

export const getProductById = async ( id ) => {
    const productFromDB = await db.cart.get(Number(id)) // esperamos que la funcion asincrona termine
    return productFromDB;
};

export const getAllProducts = async () => {
    const allProductsFromDB = await db.cart.toArray();

    return allProductsFromDB;
}
import { getAllProducts } from "../services/products.js";

const getProductsList = async (req, res) => {
    const products = await getAllProducts();
    
    res.status(200).send(products);
}

export { getProductsList };
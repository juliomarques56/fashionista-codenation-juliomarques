import data from './data.json';

export function getProducts() {
    const products = data;
    return products;
}

export function getProduct(prod) {
    const product = data.filter(({code_color}) => prod.includes(code_color));
    return product;
}
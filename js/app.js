//Getting input field values
const getValue = fieldId => {
    const field = document.getElementById(fieldId);
    const value = field.value;
    field.value = "";
    return value;
}

//Get Product
const makeNewProduct = (name, price) => {
    const id = Math.ceil(Math.random() * 1000000000);
    return {id, name, price};
}

//Add Product Handler
const addProduct = () => {
    const productName = getValue("product-name-field");
    const productPrice = getValue("product-price-field");
    let newProduct = makeNewProduct(productName, productPrice);
    let products = getProducts();
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products))
}

//Get Products from local storage
const getProducts = () => {
    const productsInLocalStorage = localStorage.getItem('products');
    let products = [];
    if(productsInLocalStorage) {
        products = JSON.parse(productsInLocalStorage);
    }
    return products;
}
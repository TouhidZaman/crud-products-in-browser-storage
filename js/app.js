//To Load initial products from Local storage
const loadProducts = () => {
    const products = getProducts();
    products.forEach(product => {
        displayProduct(product);
    });
}

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
    const newProduct = makeNewProduct(productName, productPrice);
    const products = getProducts();
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products))
    displayProduct(newProduct);
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

//Display Products
const displayProduct = (product) => {
    const productsFiled =  document.getElementById('products-filed');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <tr id="${product.id}">
            <td scope="row" colspan="2">${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="deleteProduct('${product.id}')" class="delete-btn btn fs-3 p-0 text-danger"><i class="bi bi-x"></i></button>
            </td>
        </tr>
    `;
    productsFiled.appendChild(tr);
}

loadProducts(); //To Load initial producs to UI
let cart = [];
const addToCart = () =>{
    let product = prompt('Que desea agregar al carrito?');
    cart.push(product);
}
const viewCart = () =>{
    alert(`En su carrito hay: \n- ${cart.join('\n- ')}`);
}
const viewProduct = () =>{
    const product = prompt('Que producto deseas revisar?')
    if(cart.includes(product)===true){
        alert('Si tenes eso, bro');
    }else{
        alert('Te estas olvidando de eso, rey');
    }
}
const searchProducts = () =>{
    const findProduct = prompt('Que producto/s estas buscando?');
    let results = cart.filter(product=>product.includes(findProduct));
    alert(results)
}
const deleteProduct = () =>{
    const deleteItem = prompt('Que deseas sacar del carrito?');
    cart = cart.filter(product=>product!=deleteItem);
}
const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Glass cup', price: 12.49, fragile: true},
    {name: 'Plastic cup', price: 18.99, fragile: false}
]

console.log(products.filter(function(item){
    return false
}));

const isFragile = item => item.fragile
const isExpensive = item => item.price >= 500

const filteredProducts = products.filter(isFragile).filter(isExpensive)
console.log(filteredProducts)
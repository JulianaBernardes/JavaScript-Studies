const cart = [
    '{"name": "Eraser", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil Kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}'
]

result = cart.map(e => JSON.parse(e))
                .map(e => e.price)
console.log(result)
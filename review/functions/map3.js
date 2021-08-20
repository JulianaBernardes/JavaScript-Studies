Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{"name": "Eraser", "price": 3.45}',
    '{"name": "Notebook", "price": 13.90}',
    '{"name": "Pencil Kit", "price": 41.22}',
    '{"name": "Pen", "price": 7.50}'
]

result = cart.map2(e => JSON.parse(e))
                .map2(e => e.price)
console.log(result)
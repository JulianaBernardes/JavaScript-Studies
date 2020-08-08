function generateNumbersBetween(min, max) {
    if(min > max) {[x, y] = [min, max]}

    return new Promise(resolve => {
        const factor = max - min +1
        const random = parseInt(Math.random() * factor) + min
        resolve(random)
    })
}

generateNumbersBetween(1, 60)
    .then(num => num * 10)
    .then (numX10 => `The number generated was ${numX10}`)
    .then(console.log)
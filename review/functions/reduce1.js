const students = [
    { name: 'John', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
]

const result = students.map(a => a.grade).reduce(function(accumulator, current){
    console.log(accumulator, current);
    return accumulator + current
}, 1000)
console.log(result)
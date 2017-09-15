const person = { name: 'Matheus', age: 26 }

const {name, age} = person

console.log('destructuring');
console.log(name) // 'Matheus'
console.log(age) // 26

function funcParamsDefault(pram1 = 'teste', pram2 = 'teste2') {
    console.log(pram1 + ' - ' + pram2);
}
const frutas = ["Banana", "Laranja", "Perta"];

console.log('\n');
console.log("ARROW FUNCTIONS")
console.log("console.log(frutas.map(function(fruta){");
console.log("    return fruta.toUpperCase();");
console.log("}))");

console.log(frutas.map(function(fruta){
    return fruta.toUpperCase();
}));


console.log("console.log(frutas.map(fruta => fruta.toUpperCase()))");
console.log(frutas.map(fruta => fruta.toUpperCase()))


console.log('Arrow Function Sintaxe Block');
const nomes = ['Felipe', 'Siqueira', 'Dev'].map( nome => {
    nome = nome.toUpperCase();
    return `${nome} tem ${nome.length} caracteres`;
});

console.log(nomes);
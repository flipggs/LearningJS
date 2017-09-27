# LeraningJS

## Tópicos estudados

* [ArrowFunctions](#ArrowFunctions)
* Classes
* Copy Array
* Desctructuring
* IIFE
* Spread Operator
* Symbol
* Diferença entre tipos em Javascript

## ArrowFunctions <a id="ArrowFunctions"></a>

```
const nomes = ['Felipe', 'Siqueira', 'Dev'].map( nome => {
    nome = nome.toUpperCase();
    return `${nome} tem ${nome.length} caracteres`;
});
console.log(nomes);

//["FELIPE tem 6 caracteres", "SIQUEIRA tem 8 caracteres", "DEV tem 3 caracteres"]

 ```
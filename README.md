# LeraningJS

## Tópicos estudados

* [ArrowFunctions](#ArrowFunctions)
* [Desctructuring](#Desctructuring)
* [Classes](#Classes)
* [Copy Array](#CopyArray)
* [IIFE](#IIFE)
* [Spread Operator](#SpreadOperator)
* [Symbol](#Symbol)
* [Diferença entre tipos em Javascript](#DiffTypeJS)

## ArrowFunctions <a id="ArrowFunctions"></a>

As ArrowFunctions são expressões e possuem as seguintes regras:

* Quando possue mais de um parametro deve ser passados em parênteses ();
* Quando o código dentro da função possue mais de uma linha é necessário ficar entre chaves {};


### Exemplo 01
Retorna o Array com todas as letras maiúsculas
```
const nomes = ['Felipe', 'Siqueira', 'Dev'].map( nome => nome.toUpperCase());
console.log(nomes);

//["FELIPE", "SIQUEIRA", "DEV"]

 ```

### Exemplo 02
Retorna o Array com uma frase
```
const nomes = ['Felipe', 'Siqueira', 'Dev'].map( nome => {
    nome = nome.toUpperCase();
    return `${nome} tem ${nome.length} caracteres`;
});
console.log(nomes);

//["FELIPE tem 6 caracteres", "SIQUEIRA tem 8 caracteres", "DEV tem 3 caracteres"]

 ```

 ### Exemplo 03
 Retorna o primeiro número primo de um Array
```
const arr = [1, 6, 8, 2, 4].findIndex((element, index, array) => {
        let start = 2;
        while (start <= Math.sqrt(element)) {
          if (element % start++ < 1) {
            return false;
          }
        }
        return element > 1;
    });
console.log(arr);

//3

 ```

 ## Desctructuring <a id="Desctructuring"></a>

 Desctructuring é uma forma de substituir valores de Array ou Object para variáveis.

### Exemplo 01
 ```
const arr = [10, 20, 30];

const [x, y, z] = arr;

console.log(x, y, z);
//10, 20, 30

 ```

 ### Exemplo 02
 ```
const carro = {  
  cor: 'preto',
  peso: 808,
  airbag: true
};

const {cor, peso, airbag} = carro;

console.log(cor, peso, airbag);
//preto 808 true
 ```

 ### Exemplo 03
 ```
function setarTamanho([width = 5, height = 5] = []) {
  return `Largura de ${width}px e altura de ${height}px`;
}

setarTamanho([10, 10]);
//"Largura de 10px e altura de 10px"

setarTamanho();
//"Largura de 5x e altura de 5px"
 ```
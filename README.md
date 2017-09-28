# LearningJS

## Tópicos estudados

* [ArrowFunctions](#ArrowFunctions)
* [Desctructuring](#Desctructuring)
* [Spread Operator](#SpreadOperator)
* [Set](#Set)
* [WeakSet](#WeakSet)
* [Copy Array](#CopyArray)
* [IIFE](#IIFE)
* [Symbol](#Symbol)
* [Diferença entre tipos em Javascript](#DiffTypeJS)

## ArrowFunctions <a id="ArrowFunctions"></a>

As ArrowFunctions são expressões e possuem as seguintes regras:

* Quando possue mais de um parametro deve ser passados em parênteses ();
* Quando o código dentro da função possue mais de uma linha é necessário ficar entre chaves {};


### Exemplo 01
Retorna o Array com todas as letras maiúsculas
```
let nomes = ['Felipe', 'Siqueira', 'Dev'].map( nome => nome.toUpperCase());
console.log(nomes);

//["FELIPE", "SIQUEIRA", "DEV"]

 ```

### Exemplo 02
Retorna o Array com uma frase
```
let nomes = ['Felipe', 'Siqueira', 'Dev'].map( nome => {
    nome = nome.toUpperCase();
    return `${nome} tem ${nome.length} caracteres`;
});
console.log(nomes);

//["FELIPE tem 6 caracteres", "SIQUEIRA tem 8 caracteres", "DEV tem 3 caracteres"]

 ```

 ### Exemplo 03
 Retorna o primeiro número primo de um Array
```
let arr = [1, 6, 8, 2, 4].findIndex((element, index, array) => {
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
let arr = [10, 20, 30];

let [x, y, z] = arr;

console.log(x, y, z);
//10, 20, 30

 ```

### Exemplo 02
 ```
let carro = {  
  cor: 'preto',
  peso: 808,
  airbag: true
};

let {cor, peso, airbag} = carro;

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


 ## Spread Operator <a id="SpreadOperator"></a>
 O Spread Operator serve para passar vários parametros para uma função sem declarar cada parametro separadamente.

 Serve também para concatenar mais de um Array

### Exemplo 01

```
function imprimirConteudo(...itens){
    for (let item of itens){
        console.log(item);
    }
}

imprimirConteudo('cão', 'gato', 'pato', 'pássaro');
/*
cão
gato
pato
pássaro
*/
```

### Exemplo 02

 ```
let comidas = ['queijo', 'ovos', 'pão'];
let bebidas = ['leite', 'suco', 'café'];

let alimentos = [...comidas, ...bebidas];
console.log(alimentos);
//queijo ovos pão leite suco café

 ```


## Set <a id="Set"></a>

O Objeto Set é parecido com Array, mas não possuem indices, ou seja, os itens de um Set não podem ser acessados individualmente.
E também não aceita itens duplicados como em Array.
Para inserir ou remover itens em um Set, basta usar as funções "add" e "delete".
A função "has" serve para verificar se um item existe dentro do Set.

### Exemplo 01
```
let jogos = new Set(['Super Mario', 'Top Gear', 'Mortal Kombat', 'Super Mario']);
console.log(jogos);
//Set {'Super Mario', 'Top Gear', 'Mortal Kombat'}
```

### Exemplo 02
```
let jogos = new Set(['Super Mario', 'Top Gear', 'Mortal Kombat', 'Super Mario']);
jogos.add('Street Figther');
console.log(jogos);
//Set {'Super Mario', 'Top Gear', 'Mortal Kombat', 'Street Fighter'}
```

### Exemplo 03
```
let jogos = new Set(['Super Mario', 'Top Gear', 'Mortal Kombat', 'Super Mario']);
console.log(jogos.has('Street Figther'));
//true
```


## WeakSet <a id="WeakSet"></a>

O Objeto WeakSet é parecido com Set, mas só aceita Objetos.
Não é possível fazer iteração com um WeakSet

### Exemplo 01
```
let pessoa01 = { nome: 'Felipe', peso: 60, altura: 1.6};
let pessoa02 = { nome: 'Lucas', peso: 75, altura: 1.75};

let pessoas = new WeakSet([pessoa01, pessoa02]);
console.log(pessoas);
//WeakSet [{ nome: 'Felipe', peso: 60, altura: 1.6}, { nome: 'Lucas', peso: 75, altura: 1.75}]
```
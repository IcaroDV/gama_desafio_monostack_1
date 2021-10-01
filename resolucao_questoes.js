const listaProdutos = require('./solucao');
const readline = require("readline-sync");

// • Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

length = Object.keys(listaProdutos).length;
numeroItensLista = length + 1;

console.log(numeroItensLista);

// • Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")

function emDestaque() {
    var j = 0;
    for (i = 1; i < length; i++) {
        if (listaProdutos[i]['emDestaque'] === 'sim') {
            j++;
        }
    }
    return j;
}

console.log(emDestaque())

// • Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)

function maisCaro() {
    var maiorpreco = 0;
    for (i = 1; i < length; i++) {
        if (listaProdutos[i]['preco'] > maiorpreco) {
            maiorpreco = listaProdutos[i]['preco'];
        }
    }
    return maiorpreco;
}

console.log(maisCaro())
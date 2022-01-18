// função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5)

console.log("=======================")
// função com retorno

// b = 0 dentro da função significa que se não passar um valor ele considera 0
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 7))
console.log(soma(2))
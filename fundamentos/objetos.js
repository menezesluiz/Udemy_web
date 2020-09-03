const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 49998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.9,
    obj: {
        blablabla: 1,
        obj: {
            blablabla: 2
        }
    }
}

console.log(prod2)
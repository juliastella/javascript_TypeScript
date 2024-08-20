// Paramentros da função

function funcao(a, b = 2, c = 4) { // é possivel passar o valor de cada paramentro direto 
  console.log(a + b + c);
}

funcao(2, null, 20); // vai dar erro por conta do valor do mei, mesmo que tire o null vai dar o mesmo erro.


// desistruturação de objeto

function funcao2({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: "Jú", sobrenome: "Stella", idade: 20};
funcao2(obj);


// desistruturação de array

function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao3(["ju", "Ste", 20]);


// rest operation

const conta = (...args) =>{ //o rest operation serve para paramentros indeterminados
    console.log(args);
}
conta("+", 1, 2, 3, 4);
// função geradora

function* geradora1() {
    // codigo qualquer ...
    yield 'valor 1'
    // codigo qualquer ...
    yield 'valor 2'
    // codigo qualquer ...
    yield 'valor 3'
}

// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());

// exemplo 2
function* gerador2() { // esse gerador é infinito, o que não é legal
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


// exemplo 3

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // tenho que colocar o * para informa que estou chamando outra função geradora
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

// exemplo 3
function geradora5() {
    yield function() {
        console.log('teste 1');
    };

    return function() {
      console.log('teste return'); // o return mata todos os proximos yield    
    };

    yield function() {
        console.log('teste 2');  
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
func3();
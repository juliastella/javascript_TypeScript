//Delclaração de função

// Function hosting
 // você pode usar ela no final do código e chamar no inicio o inverso.
falaOi();

function falaOi() {
    console.log("oie");
    
}


// first-class (objetos de primeira classe)

//funtion expression
const souUmDado = function () { // normalmente você não via visualizar uma funtion expression com o nome da fução.
    console.log("Sou um dado");    
}

souUmDado();

//Arrow function

const funcaoArrow = () => {
    console.log("Sou um arrow function");
}; 
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){ //vocês pode criar o 
        console.log("Estou testando...");
    }
};
obj.falar();
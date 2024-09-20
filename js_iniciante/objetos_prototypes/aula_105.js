class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Metodo estatico 

    static soma(x, y){ //nao depende de uma instacia da classe para funcionar
        return x + y
        
    }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume(); // a intacia seria isso 
console.log(controle1);

console.log(ControleRemoto.soma(1,4));// os metodos staticos não precisão criar instacia, podendo passar diretamente no console.log
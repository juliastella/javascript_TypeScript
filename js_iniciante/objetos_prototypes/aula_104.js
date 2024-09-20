class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    
    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'já ligado');
            return;
        }

        this.ligado
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'já desligado');
            return;
        }

        this.ligado = false;
    }

}

class Smartphone extends DispositoEletronico { // a palavra extends é a chave para herança
    constructor(nome, cor, modelo){
        super(nome); // Já que estou herdadondo de dispositivo, só preciso pegar o valor do construtor (nome) e depois passar a que eu tenho
        // o super e basicamente chama o costrutor da outra classe
        this.cor = cor;
        this.modelo = modelo;
    }

}

const s1 = new Smartphone('iphone', 'preto', 'iphone 10');

console.log(s1);

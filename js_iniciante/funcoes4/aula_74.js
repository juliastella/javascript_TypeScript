// funções imediatas ou a IIFFE -> Immediately invoked function expression.

//Tudo que estiver dentro desse "()" vai ser imetiatamente iniciado
// acaba protejedo do escorpo global.
(function(idade, peso, altura) {
    const sobrenome = 'Stella';
    function criaNome(nome) {
        return nome + '' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Jú '));
          
      }

      falaNome();
      console.log(idade, peso, altura);
      
    })(20, 60, 1.67);// aqui estou passando direto os paramentro de idade, peso, altura.

const sobrenome = 'Silva';// o que está dentro dos parenteses não afeta o que está fora desse escorpo.

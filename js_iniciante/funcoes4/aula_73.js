//Funções de callback

// Ela depende de uma ação para a função ser executada. 

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }
  
  function f1(callback) { // passei o parametro que é normalmente chamado callback e cb 
    setTimeout(function() {
      console.log('f1');
      if (callback) callback(); // só irá ser feito a função, se a ação acontecer primeiro
    }, rand());
  }
  
  function f2(callback) {
    setTimeout(function() {
      console.log('f2');
      if (callback) callback();
    }, rand());
  }
  
  function f3(callback) {
    setTimeout(function() {
      console.log('f3');
      if (callback) callback();
    }, rand());
  }
  

  // Essa é uma forma mais limpa de colocar em ordem os de chamada dos callback
  f1(f1Callback);
  
  function f1Callback() {
    f2(f2Callback);
  }
  
  function f2Callback() {
    f3(f3Callback);
  }
  
  function f3Callback() {
    console.log('Olá mundo!');
  }

  // A forma chamada de "callback hell"

  f1(function () { // Se for uma lógica de chamada muito grande, isso ficaria grande
    f2(function() {
       f3(function() {
        console.log("Olá mundo");
       });
    });
  });
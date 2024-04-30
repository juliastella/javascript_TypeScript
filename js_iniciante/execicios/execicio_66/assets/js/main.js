function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); 
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  
  const relogio = document.querySelector('.relogio');
  
  let segundos = 0; 
  let time;
  
  function iniciaRelogio() {
    time = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000); 
  }
  
  document.addEventListener('click', function (e) {
    const el = e.target;
  
    if (el.classList.contains('zerar')) {
      clearInterval(time);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
  
    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(time);
    }
  
    if (el.classList.contains('iniciar')) {
      clearInterval(time);
      relogio.classList.remove('pausado');
      iniciaRelogio();
    }
  });
}

relogio();
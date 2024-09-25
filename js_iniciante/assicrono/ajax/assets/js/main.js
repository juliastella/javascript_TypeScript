const request = obj => {
  const xhr = new XMLHttpRequest(); // e padrao usar esse nome de variavel para representar isso
  // o get representa busca algum conteudo da internet
  //xhr.open('GET', 'U', true); o true é representando que vai ser assicrono
  xhr.open(obj.method, obj.url, true);
  xhr.send();

   // vamos checar quando essa requisiao acabou de ocorrer

   xhr.addEventListener('load', () =>{
    if (xhr.status >= 200 && xhr.status <= 300) {
      obj.success(xhr.responseText);
    }else{
      obj.error(xhr.statusText);  
    }
   })
};

// aqui irei saber se onde eu estiver clicando sera link e nele atibuir algo
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if
});
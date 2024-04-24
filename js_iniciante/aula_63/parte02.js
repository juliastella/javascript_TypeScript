/**
 * Tratamento de erro
 */

// try { // codigo que gera o erro

// }catch(){ // tratar o erro, ou seja mudar a saida do erro

// }


try { 
    //É executada quando não há erros
    console.log(a);
    console.log('abrir um arquivo');    
}catch(e){ 
    //É executada quando há erros
    console.log('Tratando o erro');    
}finally{
    //Sempre será executado independentemente
    console.log('Finalliy:  Eu sempre so executado');    
}

/**
 * Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number);
 * Retorne true se a imagem estiver no modo paisagem. Modo paisagem = imagem deita; Modo retrato = imagem em pé.
 */
// Ternario: condição ? expressão_se_verdadeira : expressão_se_falsa

const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(4,4));
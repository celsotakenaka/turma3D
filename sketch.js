let palavra;

function setup() {
  createCanvas(600, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Inovação", "Tecnologia", "Criatividade"];
  return random(palavras);
}

function inicializaCores() {
  background("black");
  fill("#8BC34A");
  textSize(84);
  textAlign(CENTER, CENTER);
}
// criar uma function ajuda a minimizar e organizar códigos
/* para comentarios mais longos */

function palavraParcial(minimo, maximo) {
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  
  let parcial = palavra.substring(0, quantidade);
  return parcial;

  // importante destacar que essa funçao recebe parametros onde: (minimo, maximo) recebidos, executa sua função e "retorna ao parcial"
}

function draw() {
  inicializaCores(); //importante

  /*começar otimizando o comportamento das letras ==> O que faz e como faz
  assim criar uma função let parcial = palavraParcial ==>
  recorto tudo abaixo Ctrl+x
  criar a nova função acima para palavraParcial(){ colar aqui }
  em seguida criar comando return parcial;
  */
  
  let parcial = palavraParcial(0, width);
  text(parcial, 300, 200);
  
}

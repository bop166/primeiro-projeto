function setup() {//isto é realizado uma única vez no carregamento e configura o sistema que estou criando
  createCanvas(400, 400); //cria uma tela de desenho em dpi, sendo o primeiro número o eixo x e o segundo número o eixo y
  background("white") //define a cor do fundo
}


function draw() { //função responsável por desenhar
  

  stroke("black") //dá a cor pra borda do quadrado menor
  fill("purple"); //define a cor do quadrado menor
  
  if (mouseIsPressed) { //ele faz um retangulo no eixo x e eixo y
  rect(mouseX, mouseY, 20, 35); //os dois primeiros números são os eixos x e y, os outros dois são a altura e a largura
}
  
}
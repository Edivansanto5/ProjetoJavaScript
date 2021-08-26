/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/
function diferenciarTriangulo(lado1,lado2,lado3){
   
  console.log("Informe o comprimento do Primeiro Lado " + lado1)
  console.log("Informe o comprimento do Segundo  Lado " + lado2)
  console.log("Informe o comprimento do Terceiro Lado " + lado3)
  if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
        console.log("Triangulo Equilatero")
  }
  if (lado1 === lado2 && lado2 != lado3 || lado1 != lado2 && lado2 === lado3 || lado1 === lado3){
        console.log("Triangulo Isósceles")
  }
  if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
      console.log("Triangulo Escaleno")
  }
}

diferenciarTriangulo(2,3,2)
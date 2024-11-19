var frase = "Javascript is fun!"
var i = 18

//Fazer um loop para que ele escreva todas as letras
while (i >0){
    console.log(frase[frase.length -i])
    i--;
}

var letra = "a";
var quantidade = 0

//identificar quantas vezes a letra A aparece
for (var i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    quantidade++
  }
}

console.log("A letra 'a', aparece ",quantidade, "vezes na frase.")

//imprimir numeros de 1 a 10
var num=1
while(num < 11){
    console.log(num)
    num++
}
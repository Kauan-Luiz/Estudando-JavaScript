let num = [1, 5, 10, 9]

num.push = 1  //adiciona um valor no final
num.length //total de posições 
num.sort //deixa os numeros ordenados
let pos = num.indexOf(5) //procura um numero dentro da array

for (let pos=0; pos<num.length;pos++){
    console(num[pos])
}


for (let pos in num){

console.log(num[pos])}
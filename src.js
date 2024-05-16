// Entrada dos Dados

let nome = "Sanji"
let xp = "10001"
const heroi = "O Herói de nome é "
const nivel = " está no nível de "

// Estrutura de descisão



if(xp <= 1000){
    console.log(heroi + nome + nivel + "Ferro")
}
else if(xp <= 2000){
    console.log(heroi + nome + nivel + "Bronze")
}
else if(xp <= 5000){
    console.log(heroi + nome + nivel + "Prata")
}
else if(xp <= 7000){
    console.log(heroi + nome + nivel + "Ouro")
}
else if(xp <= 8000){
    console.log(heroi + nome + nivel + "Platina")
}
else if(xp <= 9000){
    console.log(heroi + nome + nivel + "Ascendente")
}
else if(xp <= 10000){
    console.log(heroi + nome + nivel + "Imortal")
}
else if(xp >= 10001){
    console.log(heroi + nome + nivel + "Radiante")
}

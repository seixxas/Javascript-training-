const nome1 = prompt("Insira o nome de um veiculo")
const nome2 = prompt("Insira o nome de mais um veiculo")

const velocidade = prompt(`Insira a velocidade do veiculo ${nome1}`)
const velocidade2 = prompt(`Insira a velocidade do veiculo ${nome2}`)

if(velocidade > velocidade2){
    alert(`A velocidade do ${nome1} e maior`)
}else{
    alert(`A velocidade do ${nome2} e maior`)
}
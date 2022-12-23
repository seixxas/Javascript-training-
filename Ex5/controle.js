let dinheiro_inicial = parseFloat(prompt("Qual seu dinheiro inicial?"))

let opcoes = ""

do{
    opcoes = prompt(`Com seu saldo de ${dinheiro_inicial}, gostaria de adicionar ou remover dinheiro?\n1. adicionar\n2. remover\n3. encerrar programa`)
    switch(opcoes){
        case "1":
            dinheiro_inicial += parseFloat(prompt("Qual valor gostaria de adicionar? "))
            break
        case "2":
            dinheiro_inicial -=  parseFloat(prompt("Qual valor gostaria de remover? "))
            break
        case "3":
            alert(`Encerrando o programa com um valor final de ${dinheiro_inicial}`)
            break
        default:
            alert("opcao invalida")   
    }

}while(opcoes != "3");

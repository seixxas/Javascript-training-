const nome = prompt("Qual seu nome senhor turista?")
let pergunta = prompt("Voce ja visitou alguma cidade?\n- sim\n- nao")
let qntd = 0
let cidades = ""

 while(pergunta == "sim"){
    const cidade = prompt("qual o nome da cidades visitada?")
    cidades += "-" + cidade + "\n"
    qntd++
    pergunta = prompt("Mais alguma outra cidade?\n- sim\n- nao")
}

alert(`Ola ${nome}, vc visitou um total de ${qntd} cidades e foram as cidades:\n${cidades}`)


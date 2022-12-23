const medida = Number(prompt("Digite uma medida em metros"))
const conversor = prompt("Digite para qual unidade de medida esse valor sera convertido:\n- milimetro (mm)\n- centimetro (cm)\n- decimetro (dm)\n- decametro (dam)\n- hectometro (hm)\n- quilometro (km)")

const mm = medida * 1000 
const cm = medida * 100 
const dm = medida * 10 
const dam = medida / 10 
const hm = medida / 100 
const km = medida / 1000 

switch(conversor){
    case "mm":
        alert(`resultado da conversao: ${mm} milimetros`)
        break
    case "cm":
        alert(`resultado da conversao: ${cm} centimetros`)
        break
    case "dm":
        alert(`resultado da conversao: ${dm} decimetros`)
        break
    case "dam":
        alert(`resultado da conversao: ${dam} decametros`)
        break
    case "hm":
        alert(`resultado da conversao: ${hm} hectometros`)
        break
    case "km":
        alert(`resultado da conversao: ${km} quilometros`)
        break
    default:
        alert("Opção nao encontrada, digite o valor que esta dentro dos parenteses")
}
    
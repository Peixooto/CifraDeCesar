const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const seletor = document.getElementById("desloc")
const texto = document.getElementById("para-cripto")
const botao = document.getElementById("botao")
const resposta = document.getElementById("resposta")

for (let i=0;i<alfabeto.length;i++){
    seletor.innerHTML = seletor.innerHTML + `<option value="${i}">${alfabeto[i]}</option>`
}

botao.addEventListener("click",()=>{
    let textoCripto = texto.value
    let desloc = +seletor.value
    let cifrado = cifrar(textoCripto,desloc)
    resposta.classList.remove("invisivel")
    resposta.innerText = cifrado
})

function cifrar(texto,desloc){
    let textoMaiusculo = texto.toUpperCase().split("")
    let textoFinal = []

    for(let i = 0; i < textoMaiusculo.length; i++){
        let indiceLetra = alfabeto.indexOf(textoMaiusculo[i])
        if(indiceLetra >= 0){
            textoFinal.push(letraPorIndice(indiceLetra+desloc))
        }else {
            textoFinal.push(textoMaiusculo[i])
        }
    }
    return textoFinal.join("")
}

function letraPorIndice(indice){
    let indiceFinal
    if(indice >=0){
        indiceFinal = indice % alfabeto.length
    } else {
        indiceFinal = alfabeto.length + indice % alfabeto.length
    }
    return alfabeto[indiceFinal]
}

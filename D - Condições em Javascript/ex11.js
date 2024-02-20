var idade = 68
if (idade < 16) {
    console.log('Não vota')
} else if (idade >=16 && idade < 18){
    console.log('Voto Opcional')
} else if (idade >= 65){
    console.log(`Você tem ${idade} anos, seu voto é opcional.`)    
} else {
    console.log(`Voto Obrigatório`)
}
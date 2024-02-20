var agora = new Date() //BIBLIOTECA PARA DATA
var hora = agora.getHours() //PEGAR HORA ATUAL
console.log(`Agora são ${hora}h.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 7
    msg.innerHTML = `Agora são ${hora} horas...`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'photomorning.jpg'
        document.body.style.background = 'gray'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'photoafternoon.jpg'
        document.body.style.background = 'red'
    } else {
        // BOA NOITE
        img.src = 'photonight.jpg'
        document.body.style.background = 'blue'
    }
}

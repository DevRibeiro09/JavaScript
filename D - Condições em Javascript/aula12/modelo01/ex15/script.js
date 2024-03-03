function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) { //VERIFICA SE A CAIXA ESTÁ VAZIA OU SE O VALOR DO ANO ESTÁ ACIMA
        window.alert('[ERRO --- TENTE NOVAMENTE!]')
    } else {
        var fsex = document.getElementsByName('radsex') //PEGOU PELO NOME PORQUE OS 'RADIOS' DO HTML TEM QUE TER O MESMO NOME
        var idade = ano - Number(fano.value) //PARA UTILIZAR O VALOR DENTRO DA VARIAVEL 'FANO'
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){ //CHECA SE O RADIO É MASCULINO
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'babyboy.jpg')
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'youngman.jpg')
            } else if (idade >= 21) {
                // ADULTO
                img.setAttribute('src', 'oldman.jpg')
            } else if (idade < 50) {
                // IDOSO 
                img.setAttribute('src', 'oldman.jpg')
                
            }

        } else if (fsex[1].checked) { //CHECA SE O RADIO É FEMININO
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'babygirl.jpg')
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'younggirl.jpg')
            } else if (idade >= 21) {
                // ADULTO
                img.setAttribute('src', 'oldwoman.jpg')
            } else if (idade < 50) {
                // IDOSO 
                img.setAttribute('src', 'oldwoman.jpg')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // MOSTRAR O RESULTADO 
        res.appendChild(img) // PRA PUXAR A IMAGEM
    }
    
}
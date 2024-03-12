function contar() {
    let inicio = window.document.getElementById('txti') //PEGANDO AS VARIÁVEIS DO HTML POR MEIO DO 'GETELEMENT'
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')
    //ALT + 124 (BARRA EM PÉ)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.alert('[ERRO] Faltam Dados')
        resultado.innerHTML = 'Impossível Contar'
    } else {
    resultado.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0 ) {
        window.alert('Passo Inválido! Considerando Passo 1')
        p = 1;
    }
    
    if (i < f) { //CONTAGEM CRESCENTE
        for (let c = i; c <= f; c += p) {
            resultado.innerHTML += ` ${c} \u{1F449}` //CÓDIGO DO EMOJI
        }
    } else { //CONTAGEM DECRESCENTE
        for (let c = i; c >= f; c -= p) {
            resultado.innerHTML += ` ${c} \u{1F449}`
            }
        resultado.innerHTML += `\u{1F3C1}` //CÓDIGO DA BANDEIRA
        }
    }
}
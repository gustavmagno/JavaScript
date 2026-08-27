var HoraAtual = new Date()
var hora = HoraAtual.getHours()
console.log(`A hora atual é: ${hora}`)
    if(hora > 6 && hora < 12) {
        console.log('Bom dia')
    } else if (hora > 12 && hora < 19) {
        console.log('Boa tarde')
    } else {
        console.log('Boa noite')
    }
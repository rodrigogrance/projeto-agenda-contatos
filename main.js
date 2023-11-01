const form = document.getElementById('form-interacao')
const nomes = []
const telefones = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaContato()
    atualizaTabela()
    atualizaTabela()
})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelefoneContato = document.getElementById('telefone-contato')

    if(nomes.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado à agenda.`)
    } else {
        nomes.push(inputNomeContato.value)
        

        const numeroFormatado = formatarTelefone(inputTelefoneContato.value);
        telefones.push(numeroFormatado)

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${numeroFormatado}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNomeContato.value = ''
    inputTelefoneContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function formatarTelefone(telefones) {
    telefones = telefones.replace(/\D/g, '');

    if (telefones.length < 10) {
        return "Telefone inválido";
    }

    let ddd = telefones.substring(0, 2);
    let numero = telefones.substring(2);

    return `(${ddd}) ${numero.substring(0, 5)}-${numero.substring(5)}`;
}


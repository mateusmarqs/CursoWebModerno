const aprovados = ['Marcos', 'Roberto', 'Silva', 'Daninha']

aprovados.forEach((nome, indice) => {
    console.log('O aprovado está no indice', indice+1, ', e seu nome é',nome)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

// pegar o input
// Se for sim, mostra os autores  disponíveis, pergunta qual categoria escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Esses são os autores disponíveis:')
  console.log(
    'Lemony Snicket',
    '/ Abby Hanlon',
    '/ Genevive Cogman',
    '/ John Green'
  )

  const entradaAutor = readline.question('Qual autor você escolhe?')

  const retorno = livros.filter(livro => livro.autor === entradaAutor)

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.log('Esses são todos os livros disponíveis:')
  console.table(livrosOrdenados)
}

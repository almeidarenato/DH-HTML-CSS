const dia = 'segunda'
const semana = () => {
  let diaDaSemana = dia
  diaDaSemana === 'Domingo'
    ? console.log(`Hoje é Domingo. Hoje é dia de churrasco`)
    : console.log(`Hoje é ${diaDaSemana}. Hj não é dia de churrasco`)
}
semana(dia)

var classe = [1, 2, 3, 4, 5]

classe.forEach(element => {
  console.log(element)
})

for (let item of classe) {
  console.log(item)
}
for (let i = 0; i < classe.length; i++) {
  console.log('Array de Numeros Posição [' + i + '] = ' + classe[i])
}

var studente = {
  nome: 'Simone',
  cognome: 'Labirintite',
  anni: 14
}

for(var key in studente){
  console.log(studente[key]);
}

var arrStudenti = [
  {
    nome: 'Emilio',
    cognome: 'Alberato',
    anni: 11
  },
  {
    nome: 'Luca',
    cognome: 'Vicenza',
    anni: 17
  },
  {
    nome: 'Gennaro',
    cognome: 'Cironi',
    anni: 43
  }
]

function addStudente(target,addNome,addCognome,addAnni){
  target.push({
    nome : addNome,
    cognome : addCognome,
    anni : addAnni
  });
}

var addNome = prompt('Nome?')
var addCognome = prompt('Cognome?')
var addAnni = parseInt(prompt('Anni?'))

addStudente(arrStudenti,addNome,addCognome,addAnni)

for(var key of arrStudenti){
  console.log('Nome: ' + key.nome + '/Cognome: ' + key.cognome)
}
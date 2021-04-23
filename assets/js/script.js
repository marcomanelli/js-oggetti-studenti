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

for(var key in arrStudenti){

  for(var key2 in studente){
    console.log('Nome: ' + studente.nome + '/Cognome: ' + studente.cognome);
  }
}

function addStudente (target,addNome,addCognome,addAnni){
  target.push({
    nome : addNome,
    cognome : addCognome,
    anni : addAnni
  });
}
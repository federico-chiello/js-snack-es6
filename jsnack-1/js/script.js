// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

// Array di oggetti biciclette.
const biciclette = [
  {
    nome : 'Fast-one',
    peso : 300
  },
  {
    nome : 'Wind',
    peso : 230
  },
  {
    nome : 'Thunder',
    peso : 245
  },
  {
    nome : 'Thunder-2',
    peso : 260
  },
  {
    nome : 'Sun',
    peso : 280
  }
];

// Utilizziamo il metodo destructuring, cioè prendere alcune proprietà dell'oggetto e inserirle in una variabile.

const [biciUno, biciDue, biciTre, biciQuattro, biciCinque] = biciclette;
// console.log(biciDue);

// Dichiariamo una variabile del peso minore
let pesoMinore = biciclette[0].peso;

// Utilizziamo il for each per controllare il peso di ogni bicicletta.
// metodo 1: con la arrow function
biciclette.forEach((element) => {
  const {nome, peso} = element;
  if (peso < pesoMinore) {
    pesoMinore = peso;
  }
});

// metodo 2: con function semplice
// biciclette.forEach(function (element){
//   const {nome, peso} = element;
//   if (peso < pesoMinore) {
//     pesoMinore = peso;
//   }
// });

// Usiamo il template literal per stampare la bici con il peso minore.
console.log(`
  La bicicletta ${biciDue.nome} ha il peso più basso che ammonta a ${pesoMinore}
`);

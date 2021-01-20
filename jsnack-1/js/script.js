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

  // const [biciUno, biciDue, biciTre, biciQuattro, biciCinque] = biciclette;
  //
  // console.log(biciDue.nome + ' '+ biciDue.peso);

// Template literal
let name = biciclette[1].nome;
let peso = biciclette[1].peso;

console.log(
`
 ${name} ${peso}
`
);

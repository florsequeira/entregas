const Pizza= [
    {
        id: 1,
        nombre: 'Rúcula',
        ingredientes:['rúcula','panceta','queso'],
        precio: 700,    
    },

    {
        id:2,
        nombre: 'Fugazza',
        ingredientes: ['cebolla', 'queso'],
        precio: 600,
    },
    {
        id:3,
        nombre:'Margarita',
        ingredientes:['tomate', 'albahaca', 'queso'],
        precio:500, 
    },
    {
        id:4,
        nombre: 'Pepperoni',
        ingredientes:['pepperoni','queso'],
        precio:700,
    },
    {
        id:5,
        nombre:'Hawaiana',
        ingredientes:['ananá','queso'],
        precio:700,
    },
    {
        id:6,
        nombre:'Mexicana',
        ingredientes:['jalapeños','nachos','queso'],
        precio:600,
    },
];


// Las pizzas que tengan un id impar.

 for (let i = 00; i <= Pizza.length; i++) {
if (i % 2 === 0) { continue;
  }
  console.log(`El id ${i} es impar`);}

//¿Hay alguna pizza que valga menos de $600?

 const MenorA600 = Pizza.filter((Pizza) => Pizza.precio < 600);
//console.log(MenorA600);

// Los nombres de todas las pizzas.

const NombrePizza = Pizza.forEach((Pizza)=> console.log(`Pizza ${Pizza.nombre}`));
//console.log(NombrePizza);

// Los precios de las pizzas.

const PrecioPizza = Pizza.forEach((Pizza)=> console.log(`La pizza vale ${Pizza.precio}`));
//console.log(PrecioPizza);

// El nombre de cada pizza con su respectivo precio.
const imprimirNombreYPrecio = Pizza.forEach((Pizza) => console.log(`La pizza ${Pizza.nombre} sale $ ${Pizza.precio} `));

   // console.log(imprimirNombreYPrecio);



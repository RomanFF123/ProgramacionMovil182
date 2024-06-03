// primera parte 
let numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]; 

async function pares(){
    const npares = numeros.filter(numero => numero % 2 == 0);
    return npares;
}
pares().then(pares => console.log(("Números pares:"), pares));


// Segunda parte 
const estudiantes = [
    { name: 'Mane', age: 15 },
    { name: 'Andrea', age: 22 },
    { name: 'Alma', age: 19 },
    { name: 'Emma', age: 29 },
    { name: 'Maria', age: 13 },
    { name: 'Luis', age: 16 },
    { name: 'Yair', age: 21 }
  ];

  async function filtro() {
    const mayores = estudiantes.filter(estudiante => estudiante.age > 18);
    const nombresMayores = mayores.map(estudiante => estudiante.name);
    return nombresMayores;
  }
  
  filtro().then(nombres => console.log(("Mayores de edad:"), nombres));


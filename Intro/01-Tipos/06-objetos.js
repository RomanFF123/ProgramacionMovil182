// Artista

let nombre = "Luis R";
let genero = "corridos";
let nacionalidad = "mexicana"; 
let edad = 32; 

let Artista = {
    nombre:"Bad bunny",
    genero:"trap",
    nacionalidad:"Puerto rico",
    edad: 28,
};

console.log(Artista);
console.log(Artista.nombre);
console.log(Artista['genero']);

Artista.edad = 38;
Artista['edad'] = 35;

delete Artista.nacionalidad;

console.log(Artista);
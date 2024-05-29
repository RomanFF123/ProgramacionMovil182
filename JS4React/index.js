//funcion suma
/*
function suma (a,b){
    return a+b
 } */

// fat Arrow Funtion
// const suma = (a, b)=> a+b

const usuario={
    nombre: 'Roman',
    apellido: 'ferrusquia',
    edad: 20,
    direccion:{
        pais: 'Mexico',
        ciudad: 'Queretaro',
        calle: 'Av. Sonterra',
        numero: 3001
    },
    amigos: ['Saimon', 'Luis'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'enviando...'
}

//Propiedades
//console.log(usuario);
//console.log(usuario.amigos);
//console.log(usuario.direccion);

//Metodos
//console.log(usuario.enviaCorreo())

// TRABAJO CON DOM 
 
//const titulo = document.createElement('h1')
//titulo.innerText = 'Titulo creado con JavaScript'
//document.body.append(titulo) 

//const boton = document.createElement('button')
//boton.innerText = 'Presioname'
//document.body.append(boton)

//boton.addEventListener('click', function(){
    //console.log('Evento Click ejecutado')
//    titulo.innerText="Evento Click ejecutado"
    // alert('exito')
//})ç


// Ejemplo de promesa
/*
const ul = document.createElement('ul')

let datos = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response){
            console.log("Carga de Datos Completada") 
            return response.json()
        }).then(function(data){
            console.log(data)
            data.forEach(function(post){
                const li = document.createElement('li')
                li.innerHTML = post.body
                ul.append(li)
            })
        document.body.append(ul)
        })



console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')
console.log(datos);

*/

//Ejemplo de Async

 const ul= document.createElement('ul')
async function cargarDatos (){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos = await response.json()
    console.log(datos)
    datos.forEach(function(post){
        const li = document.createElement('li')
        li.innerHTML = post.id
        ul.append(li)
    })
    document.body.append(ul)
}
cargarDatos()
console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')

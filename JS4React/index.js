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
const titulo = document.createElement('h1')
titulo.innerText = 'Titulo creado con JavaScript'
document.body.append(titulo) 

const boton = document.createElement('button')
boton.innerText = 'Presioname'
document.body.append(boton)

boton.addEventListener('click', function(){
    //console.log('Evento Click ejecutado')
    titulo.innerText="Evento Click ejecutado"
    // alert('exito')
})
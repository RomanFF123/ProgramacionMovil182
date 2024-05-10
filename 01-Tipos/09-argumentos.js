function suma (x, y){
    console.log(arguments);
    return x + y + 2;
}

let resultado = suma (9, 8);

console.log(resultado); 
console.log(typeof suma);
let user = {
    id:1,
    name:'roman',
    age:20,
};

for (let prop in user) {
    console.log(prop, user['prop']);
}

let animales = ['tigre', 'leon', 'gato', 'pantera']
for (let indice in animales){
    console.log(indice, animales[indice]);
}
var lastName = 'Molina'
lastName = 'Guevara' // reasignar
console.log(lastName);
var lastName = 'Guevara'

let fruit = 'apple';
// let fruit = 'banana';
fruit = 'banana'
console.log(fruit);

const animal = 'perro';
// animal = 'gato' No se puede reasingar con cost
console.log(animal);

const fruits = ()=> {
    if (true) {
        var fruit1 = 'apple'; //function scope
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'coco' // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
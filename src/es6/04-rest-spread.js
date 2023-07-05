// arrays destructuring 

let fruits = ['manzana','banano'];
let [a,b]= fruits;

console.log(a,b);
console.log(a,fruits[1]);

// objetos destructuring 

let user = {
    usarName: 'Eliezer',
    age: 22,
};
let {usarName, age} = user;
console.log(usarName, age);
console.log(usarName, user.age);

// spread operator 

let person = {
    name: 'Eliezer',
    age: 22,
}
let country = 'Guatemala';

let data = {id:1010, ...person, country};
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3)
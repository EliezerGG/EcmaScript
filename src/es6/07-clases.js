//Declarando
class User {};
const newUser = new User();
//Instancia de una clase
// const newUser = new User();

class User2 {
    // metodos
    saludo(){
        return 'Hello';
    }
};

const asdf = new User2();
console.log(asdf.saludo());

const bebeloper = new User2();
console.log(bebeloper.saludo());

// Constructor 

class user {
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    saludo(){
        return 'Hello';
    }
}

const david = new user();

// this

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speack(){
        return 'Hello';
    }
    saludo(){
        return `${this.speack()} ${this.name}`;
    }
}

const ana = new user('Ana');

console.log(ana.saludo());

// setter getter

class user {
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    saludo(){
        return `${this.speack()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }

}
const usuario = new user('David', 25)
console.log(usuario.uAge);
console.log(usuario.uAge = 20);
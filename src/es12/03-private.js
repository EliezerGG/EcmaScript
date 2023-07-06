class user {
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak(){
        return 'Hello';
    }
    saludo(){
        return `${this.speack()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }

}
const usuario = new user('David', 25)
console.log(usuario.uAge);
console.log(usuario.uAge = 20);
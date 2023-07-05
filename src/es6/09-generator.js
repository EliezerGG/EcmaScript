function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Sara', 'Sabrina', 'Lucia','Alejandra']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


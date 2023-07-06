//fla
const array = [1,2,3,4,5,5,[1,2,3,4,[2,4,6]]];
console.log(array.flat(3));

// flatmap

const array2 = [2,3,4,5,6];
console.log(array2.flatMap(v => [v, v*2]));
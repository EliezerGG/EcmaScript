const user = {
    username:'bcool',
    age: 22,
    country: 'GT',
};
const {username, ...values} = user;
console.log(username);
console.log(values);
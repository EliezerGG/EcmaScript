// enhaced object literals 

function newUser(user,age,country,uId) {
    return{
        user,
        age,
        country,
        id: uId, 
    }
}
console.log(newUser('ndx',32, "Guate",1));
const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('Resuelto')
        }else{
            reject('Rechazado')
        }
    })
}

anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err))
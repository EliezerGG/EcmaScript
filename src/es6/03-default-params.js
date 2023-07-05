function newUsers(name,age,country) {
    var name = name || 'Eliezer';
    var age= age || 22;
    var country = country || 'Guatemala';
    console.log(name,age,country);
}

newUsers();
newUsers('David',14, 'Colombia')

function newAdmin(name = 'Isai', age=23, country='Guatemala') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Sara',20)
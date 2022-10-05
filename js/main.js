
// let name = prompt("ismingiz");
// let age = prompt("yoshingiz");
// let isMarried = prompt("oila qurganmisiz");
// let oila = false;

// if(isMarried.toLowerCase() == "ha"){
//     oila = true
// } else if(isMarried.toLowerCase() == "yo'q"){
//     oila = false
// }


// let person1 = {
//     name: name,
//     age : age,
//     isMarried :  oila
// };

// person1

// const person = {
//     name: "ulugbek",
//     age: 20,
//     isMarried : false
// }
// console.log(person1);
// console.log("Sizning ismim", person1.name , ", yoshingiz", person1.age, "da," , person1.isMarried ? "uylangangansiz." : "uylanmagansiz.");

function passwordFunc(){
    let pass = '';
    let code1 = Math.floor(Math.random()*10);
    let code2 = Math.floor(Math.random()*10);
    let code3 = Math.floor(Math.random()*10);
    let code4 = Math.floor(Math.random()*10);
    let code5 = Math.floor(Math.random()*10);
    let code6 = Math.floor(Math.random()*10);

    pass = pass + code1 + code2 + code3 + code4 + code5 + code6;

    return pass;

}
let passQiymat = passwordFunc()

console.log("pass", passQiymat);
// console.log(passwordFunc());
function register(){
    let name = prompt('Ismingizni kiriting');
    let lastName = prompt('Familiyangizni kiriting');
    let email = prompt("Emailingizni kiriting");

    let personObj = {
        nameObj: name,
        lastNameObj: lastName,
        emailObj: email,
        PasswordObj: ''

    };

    personObj.nameObj ? console.log(passwordFunc()) : register();

    personObj.PasswordObj = prompt("Biz sizga kodni jo'natdik kodni kiriting");

    console.log(personObj);

}

register();
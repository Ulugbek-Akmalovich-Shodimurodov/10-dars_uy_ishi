
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

    personObj.nameObj ? console.log(passQiymat) : register();

    let pass = prompt("Biz sizga kodni jo'natdik kodni kiriting");
     
    if(pass == passQiymat){ 
        personObj.PasswordObj = pass 
        return login(personObj) 
    } else {
        register()
        return ("Parol xato kiritildi.");
    }

}
function login(personobj){
    let login_parol =  prompt('Login Page Parolni kiriting: ') ;
    if(personobj.PasswordObj == login_parol){
        console.log("Muvaffiqiyatli ro'yxatdan o'tdingiz:");
        return personobj;
    }
    else{
        return "parol xato kiritildi.";
    }

}


// function Min(a , b , c ){     a > b && a > c ? console.log(a) : b > c && b > a ? console.log(b) : console.log(c); }

// Min(5 , 7 ,1)
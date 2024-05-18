let passwordBox = document.querySelector("#password");
let lenth = 12;



let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "123456789"
let symbol = '!@#$%^&*()';

let allChr = upperCase + lowerCase + number + symbol; 


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];



    while(lenth > password.length){
            password += allChr[Math.floor(Math.random() * allChr.length)];

    }
    passwordBox.value = password;


}
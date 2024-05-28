const passBox=document.querySelector("#password");
const generate=document.querySelector(".generate");
const copyBtn=document.querySelector(".copy");

const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="@#$%&*<>+=-_\/";

const allCharacter=uppercase+lowercase+numbers+symbols;

const createPass=()=>{
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];


    while(length > password.length)
        {
            password+=allCharacter[Math.floor(Math.random()*allCharacter.length)];
        }
        passBox.value=password;
}

generate.addEventListener("click",createPass);

const copy=()=>{
    passBox.select();
    document.execCommand("copy");
}

copyBtn.addEventListener("click",copy);
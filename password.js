const inputpassword=document.getElementById("password");
const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*(){}|:;><?/";
const alchars=uppercase+lowercase+number+symbol;

function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*uppercase.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=alchars[Math.floor(Math.random()*alchars.length)];
    }
    inputpassword.value=password; 
}
function copypassword(){
    inputpassword.select();
    document.execCommand("copy");
}


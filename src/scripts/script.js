
// var a=true;
// while(a){
// var result = prompt('Введите логин','' ,'');
// if (result === null) {
//   alert('Вы отказались от ввода');
  
// }

// else if(result==="a"){
//     a=false;
// } 
// else if (result==="Админ") {
//     alert('Добро пожаловать милорд, введите пароль');
//     var n=prompt('Введите пароль');
//     var l=true;
//     while(l){
//         if(n==null){
//             alert("Отменено, вы вернетесь назад");
//         }
//         else if(n=="Я главный"){
//             alert("Здравствуйте");
//             l=false;
//             a=false;
//         }
//         else{
//             alert("попробуйте ещё раз");
//         }
//     }
// } else {
//   alert('крестьянин, я вас не знаю, попробуйте еще раз');
// }
//}
var counterVal = 0;
var countL=1;

function incrementClick() {
    if (countL==1){
    updateDisplay(++counterVal);
    
    document.getElementById("tap").style.backgroundColor="rgba(255, 122, 122, 0.5)";
    countL+=1;
}else {
    updateDisplay(--counterVal);
    
    document.getElementById("tap").style.backgroundColor="white";
    countL-=1;
}
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
function updateColor(){
}


function Captcha(){
        document.getElementById("mainCaptcha").innerHTML = parseInt(document.getElementById("mainCaptcha").innerHTML)+1;
      }
function ValidCaptcha(){
    document.getElementById("mainCaptcha").value = parseInt(document.getElementById("mainCaptcha").value);
    var res=document.getElementById('mainCaptcha').value;
    var a=prompt("Введите число");
    while(isNaN(parseInt(a))){
        var a=prompt("Введите число");
    }
    document.getElementById("mainCaptcha").innerHTML = parseInt(res)+parseInt(a);
    document.getElementById("mainCaptcha").value = parseInt(res)+parseInt(a);
}

var abc= setInterval(Captcha,1000);
function stop(){
    clearTimeout(abc);
    abc= setTimeout(Captcha,10000)
}
function read(){
    var a=promt("Введите новое значение", " ");
    document.getElementById("cur").innerHTML=parseInt(document.getElementById("cur").value)+parseInt(a);
}

function truncate(str,maxlength){
    if(str.length>maxlength){
        var str1=str.substr(0,maxlength);
        var str2=str1+"...";
        return str2; 
    }
    else {
        return str;
    }
}


let desc=document.querySelectorAll('testFirst');
for(let a of desc){
    a.innerHTML=truncate(e.innerHTML,1)
}
function tr(){
    var a=document.getElementById("testFirst").innerHTML;
    var b=truncate(a,6);
    document.getElementById("testFirst").innerHTML=b;
}
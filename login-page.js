const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web") {
        alert("You have successfully logged in.");
        location.href='gird.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
            '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
                     }
        var code = a + b  + c +  d +  e + f  + g;
        document.getElementById("mainCaptcha").innerHTML = code
        document.getElementById("mainCaptcha").value = code
      }
function ValidCaptcha(){
    var string1 =document.getElementById('mainCaptcha').value;
    var string2 =document.getElementById('txtInput').value;
    if(string1.indexOf("+")>-1){
        var res=document.getElementById('mainCaptcha').value;
        var result=res.split("+");
        var a=result[0];
        var b=result[1];
        var resu=parseInt(a)+parseInt(b);
        var string2 =document.getElementById('txtInput').value;
        if (resu == string2){
            alert("Ввод корректен");
        }
        else{        
             alert("Ввод некорректен");
         }
    }
    else{
        if (string1 == string2){
               return alert("Ввод корректен");
    }   else{        
             return SecCap();
         }
    }
}
function SecCap(){
    alert("Вы неверно ввели данные")
    var a=Math.round(Math.random()*100);
    var b=Math.round(Math.random()*100);
        var code = a + '+' + b ;
        document.getElementById("mainCaptcha").innerHTML = code
        document.getElementById("mainCaptcha").value = code
      }

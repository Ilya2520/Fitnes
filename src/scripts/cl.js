
var events1=document.querySelectorAll(".event1");
var clr1="#f6b067";
var events=document.querySelectorAll(".event");
var clr="#513e63";
var events2=document.querySelectorAll(".event2");
var clr2="#f66767";
var events3=document.querySelectorAll(".event3");
var clr3="#7eff75";
var events4=document.querySelectorAll(".event4");
var clr4="#ffe93e";

var massiv=new Array(5);
var bccc=[events,events1,events2,events3,events4];
for(var j=0;j<5;j++){
    massiv[j]=Array(bccc[j].length).fill(0);
}
var treners=["Смирнов А.В", "Иванов Д.В", "Григорьев М.П", "Игнатьев Л.Н","Невский А.Н"];
var r="</br>";
var ul = document.getElementById("list");
var bt=document.getElementById("menu-btn3");

function del(){
    ul.innerHTML="<ul></ul>";
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Нет записей"));
    ul.appendChild(li);
    ul.style.flexDirection="column";
    for(var j=0;j<5;j++){
        massiv[j]=Array(bccc[j].length).fill(0);
    }
}
del();


function start(ioga,clrs,n){
    for(var i=0;i<ioga.length;i++){
    ioga[i].addEventListener('click',function(){
        
        var b=this.innerHTML.indexOf("-");
        var str=[this.innerHTML.slice(b-6,b),this.innerHTML.slice(b+1,b+7)];
        var bc=this.querySelectorAll(".ioga");
        var zj=document.getElementById("zj");
        var zj1=document.getElementById("zj1");
        var zj0=document.getElementById("zj0");
        var idu=document.getElementById("node");
        var idu2=document.getElementById("node2");
        idu2.innerHTML="Тренер: "+treners[n-1]+r+"Длительность занятия: "+resH(str)+" час(а)"+r+"Для того, чтобы записаться,"+r+" нажмите на кнопку";
        idu.style.fontFamily="Source Sans Pro, sans-serif";
        idu.style.fontSize="2rem";
        idu.style.color="white";
        idu.innerHTML="<b>"+bc[0].innerHTML+"</b>";
        idu2.style.fontFamily="Source Sans Pro, sans-serif";
        idu2.style.fontSize="2rem";
        idu2.style.color="black";
        idu2.style.textAlign="center";
        zj1.insertAdjacentHTML("beforeend", '<button class="remove-butto">Записаться</button>');
        zj1.lastChild.onclick=()=>{
            if( massiv[n-1][i-1]!=1){
                var str=ul.innerHTML;
                if(str.includes("Нет записей")){
                    ul.removeChild(ul.lastElementChild);
                }
                var li = document.createElement("li");
                li.append(document.createTextNode(bc[0].innerHTML));
                ul.append(li);
                ul.style.flexDirection="column";
                massiv[n-1][i-1]+=1;
        }else{
            alert("Вы уже записались на событие данного цвета");
        }

        }
        zj.style.background=clrs;
    zj.style.opacity=1;
    zj.style.position="fixed";
    zj1.style.position="fixed";
    zj.style.zIndex=1000;
    zj1.style.background="white";
    zj1.style.opacity=1;
    zj1.style.zIndex=1000;
    zj.classList.add('animated');
    zj1.classList.add('animated1');
    zj0.style.opacity=1;
    zj0.style.zIndex=99;
    zj.insertAdjacentHTML("afterbegin", '<button class="remove-button">x</button>');
    zj.firstChild.onclick = () =>{ 
        document.querySelectorAll(".remove-button")[0].remove();
        document.querySelectorAll(".remove-butto")[0].remove();
        zj.style.opacity=0;
        zj1.classList.remove('animated1'); 
        zj.classList.remove('animated'); 
        zj.style.zIndex=0;
        zj1.style.opacity=0; 
        zj1.style.zIndex=0;
        zj0.style.opacity=0; 
        zj0.style.zIndex=0;
    }
    })
    }
}


start(events1,clr1,2);
start(events,clr,1);
start(events2,clr2,3);
start(events3,clr3,4);
start(events4,clr4,5);

function hours(str1){
    var p=0;
    var res=' ';
    while(p<str1.length-1){
        if(str1[p]==":"){
            break;
        }
        if(str1[p]!=">"){
        res+=str1[p];
    }
        p++;
    }
    return res;
}
function resH(l){
    return res = parseInt(hours(l[1]))-parseInt(hours(l[0]));
}




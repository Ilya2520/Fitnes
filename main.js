
var endDate = new Date("Jan 15, 2023 12:00:00").getTime();
var sc=window.screen.width;
var timer = setInterval(function() {
        let now=new Date();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if(screen>500){
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>Дней:</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>Часов:</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>Минут:</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>Секунд</span>";
        }
        else{
            document.getElementById("timer-days").innerHTML = days +
            "<span class='label'>(Д):</span>";
        
            document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
            "<span class='label'>(Ч):</span>";
        
            document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
            "<span class='label'>(М)</span>";
        
        }
    } else {
        document.getElementById("timers").innerHTML = "Предложение недоступно!";
    
    }
    document.getElementById("cont1").style.justifyContent="right";
    
}, 1000);

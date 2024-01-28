const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var today = new Date();
var intervalID = window.setInterval(myCallback, 1);
let running = true;
function myCallback() 
{
    if(running)
    {
        today = new Date();
        endDate = new Date("March 8, 2024 14:45:00");
        var left = endDate - today;
        //console.log(left);
        var today1 = days[today.getDay()-1] +", "+ today.getDate() +" de "+ months[today.getMonth()] + " de " + today.getFullYear() +", "+ today.getHours() +":"+ today.getMinutes()+":"+ today.getSeconds()+"."+ today.getMilliseconds();
        var endDate1 = days[endDate.getDay()] +", "+ endDate.getDate() +" de "+ months[endDate.getMonth()] + " de " + endDate.getFullYear() +", "+ endDate.getHours() +":"+ endDate.getMinutes()+":"+ endDate.getSeconds()+"."+ endDate.getMilliseconds();
        document.getElementById("left").innerHTML = parseInt(Math.abs(new Date(left)/(1000*60*60*24))) +" días, " + parseInt(Math.abs((new Date(left)%(1000*60*60*24))/(1000*60*60))) + " horas, " + parseInt(Math.abs((new Date(left)%(1000*60*60))/(1000*60))) + " minutos, " + parseInt(Math.abs((new Date(left)%(1000*60))/(1000))) + " segundos.";// No of days
        if(left <= 0)
        {
            running = false;
            //console.log("done");
            //console.log(running);
            document.getElementById("left").innerHTML = "0 días, " + " 0 horas, " + " 0 minutos, " + "0 segundos.";
        }
    }  
}

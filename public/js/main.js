function realtimeClock(){

    var rtClock = new Date();
 
    var hours =   rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
 
    hours = (hours < 6) ? hours + 18 : hours -6;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
 
    document.getElementById("clock").innerHTML = 
    hours +  " : " + minutes + " : " + seconds;
    
    var t = setTimeout(realtimeClock, 500);
 }
 
 realtimeClock();
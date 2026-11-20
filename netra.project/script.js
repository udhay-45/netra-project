//update the dashboard clock
function updateclock(){
    const clock = document.getElementById("clock");
    if(clock)
        clock.textContent = new Date().toLocaleTimeString();
}
//Run once now, then repeat every 1000ms
updateclock();
setInterval(updateclock, 1000);
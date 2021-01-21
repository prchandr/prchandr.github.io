setInterval(showTime, 1000); 
function showTime() { 
    let currentTime = new Date(); 
    let graduation = new Date(2022, 5, 20);
    let diff = graduation - currentTime;

    let sec = floor(diff/1000);
    let day = floor(sec / (60*60*24));
    sec = sec % (60*60*24);
    let hour = floor(sec / (60*60))
    sec = sec % (60*60);
    let min = floor(sec / 60)
    sec = sec % 60
    
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let timeLeft = day + ":" + hour + ":" + min + ":" + sec;
    console.log(timeLeft)
    document.getElementById("countdown") 
            .innerHTML = timeLeft; 
} 
showTime(); 
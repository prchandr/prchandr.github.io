setInterval(showTime, 1000); 
function showTime() { 
    let currentTime = new Date(); 
    let graduation = new Date(2022, 5, 20);
    let diff = graduation - currentTime;
  
    document.getElementById("countdown") 
            .innerHTML = diff; 
} 
showTime(); 
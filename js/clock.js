let userName = prompt("Adinizi Girin")
let info = document.querySelector('#myName')
info.innerHTML = `${userName} `

function showTime(){
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}
setInterval(showTime,1000);
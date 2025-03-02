//timer
function time (){
const timenow = new Date();
const hours = String(timenow.getHours()).padStart(2,'0');
const minutes = String(timenow.getMinutes()).padStart(2,'0');
const seconds = String(timenow.getSeconds()).padStart(2,'0');
let timer = document.getElementById('clock');
if(hours>='12'&&hours<'24')
{
    timer.textContent = `PM ${hours}:${minutes}:${seconds}`

}
else{
    timer.textContent = `AM ${hours}:${minutes}:${seconds}`

}
}
let timer = setInterval(time,1000);


let startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click',()=>{
timer = setInterval(time,1000);
    
})
let stopBtn = document.getElementById('stopBtn');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
})

let GoURL = document.getElementById('getURl');
GoURL.addEventListener('click',()=>{
const gourl = prompt("enter the url");
if (gourl) {
    if (!gourl.startsWith('http://') && !gourl.startsWith('https://')) {
      gourl = 'http://' + gourl;
    }
}
window.location.href = gourl;
}
)

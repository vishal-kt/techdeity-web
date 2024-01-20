const start =  document.getElementById('start')
const stop = document.getElementById('stop')


const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for( let i = 0; i<6;i++){

        color += hex[Math.floor(Math.random()*16)];
    }
    
    return color 
};

let intervalId ;
startChanging = function () {

    intervalId=  setInterval(changeBgColor,10);

    function changeBgColor() {
        document.getElementById('main').style.backgroundColor=randomColor()

    }

}
stopChanging = function () {
    clearInterval(intervalId)
};

start.addEventListener('click',startChanging);
stop.addEventListener('click',stopChanging)

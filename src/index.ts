const startB = document.getElementById('start') as HTMLButtonElement;
const stopB = document.getElementById('stop') as HTMLButtonElement;
let intervalId:any;

const randomColor = function():string{
    const hex = "0123456789ABCDEF"
    let color:string="#"
    for(let i =0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor())

const startChangingBG = function():void {
    if(!intervalId){
        intervalId = setInterval(BGColor,1000)
    }
    function BGColor(){
        const body = document.querySelector('body') as HTMLBodyElement;
        body.style.backgroundColor = randomColor()
    }
}

// Stop Changing BG Color
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

// Event Listener

startB.addEventListener('click',startChangingBG)

stopB.addEventListener('click',stopChangingColor)
const timeH = document.querySelector('h4');

let input = document.querySelector('input');

const button = document.getElementById('button');

let count = true;



button.addEventListener('click', () => {

    Counting();
    
})

function Counting() {
    if (count == true) {
        startTimer()
        count = !count;
        button.innerHTML = 'СТОП';
    } else {
        location.reload()
    }
}

function startTimer() {
    let timeSeconds = ToSeconds(input.value.replace(/[^\d]/g, ''))

    displayTime(timeSeconds)

    const countDown = setInterval(()=> {
        
        timeSeconds--;
        displayTime(timeSeconds);
        if(timeSeconds <= 0 || timeSeconds < 1){
            endTime();
            clearInterval(countDown);
        }
    },1000)
}



function ToSeconds (value) {
    let timeSeconds = 0;

    timeSeconds += parseInt(value[3])*60;
    timeSeconds += parseInt(value[2])*10*60;
    timeSeconds += parseInt(value[1])*3600;
    timeSeconds += parseInt(value[0])*10*3600;

    return timeSeconds;
}




function displayTime(second) {
    let hour = Math.floor(second / 60 / 60);
    let min = Math.floor(second / 60) - (hour * 60);
    let sec = second % 60;
    timeH.innerHTML = `${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function endTime() {
    timeH.innerHTML ='Время вышло'
}

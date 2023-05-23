const setOfwords = [" user name: malay khan", " user name: javed", " user name: ismail"];

const msg = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomN0 = Math.floor(Math.random() * setOfwords.length);
    msg.innerText = setOfwords[randomN0];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalStr = typewords.value;
    let wowrdCount = wordCounter(totalStr);
    console.log(wowrdCount, totalTime);
    let speed = Math.round((wowrdCount / totalTime) * 60);
    let finalMsg = "you typed total " + speed + " words per minuts";
    msg.innerText = finalMsg;
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function() {
    if (this.innerText == 'Start') {
        typewords.disabled = false;
        playGame();
    } else if (this.innerText == 'Done') {
        typewords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
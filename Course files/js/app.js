// Steps-1 we need to define count down value for speacific date when page will launch
// step-2 we need current date and subtract it from launch date- at this date timer will expire 
// step 3- we function that changes time for each 1sec Interval
// when time expires change the content of the page

// set countdown date with future date with 24hour format
// we have set currnt date in milisecond + 10000 = future date
var countDownDate = new Date("Jan 6, 2023 15:5:52").getTime();
let timeInterval;
function startCountDown(){
    let dayElement = document.querySelector('#days');
    let hourElement = document.querySelector('#hours');
    let minuteElement = document.querySelector('#minutes');
    let secondElement = document.querySelector('#seconds');
    let timeRunningContent = document.querySelector('#timer-running');
    let timeExpireContent = document.querySelector('#timer-end');
    // get current date ka milisecond
    let now = new Date().getTime();
   
    // timeLeft will get in milisecond
    let timeLeft = countDownDate - now;
    console.log(`left time is ${timeLeft}`);

    // how many days(24*60*60) ,hours (24*60) ,  we will have for this much leftTime
    let days = Math.floor(timeLeft/(24*60*60*1000));
    console.log(`number of day is ${days}`);

    // when we get days then remaining fraction (reminder %) ka hour calculate and round it
    let hours = Math.floor((timeLeft % (24*60*60*1000))/(1000*60*60));
    // hour ke remainder ka minute calculate and round it
    let minutes = Math.floor((timeLeft % (1000*60*60))/(1000 *60));
    // minute ke remainder ka second calculate and round it
    let seconds = Math.floor((timeLeft % (1000 *60))/(1000));

    // replace content
    dayElement.innerHTML = `<span>${days}</span>days`
    hourElement.innerHTML = `<span>${hours}</span>hours`
    minuteElement.innerHTML = `<span>${minutes}</span>minutes`
    secondElement.innerHTML = `<span>${seconds}</span>seconds`

    // when time is timeleft is zero then clear interval and display timer-end content and hide timer running content
    if(timeLeft < 1){
        endCountDown();
        function endCountDown(){
            clearInterval();
            // running content will fadeout and hide
            timeRunningContent.classList.add('hidden');
            // timer-end content will fade in and display
            timeExpireContent.classList.add('visible');
        }
        
    }
}
window.addEventListener('load', ()=>{
    startCountDown();
    timeInterval = setInterval(startCountDown , 1000)
})

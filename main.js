// DOM Elements
const time = document.getElementById('time');    
greeting = document.getElementById('greeting');




  const showAmPm = true;
  
// show time
function showTime() {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000); 
}

//add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set greeting
function setGreet(){
  let today = new Date(), 
  hour = today.getHours();

  if(hour < 12) {
    //morning
    greeting.textContent = 'Good Morning,';
  } else if(hour < 18) {
    //afternoon
    greeting.textContent = 'Good Afternoon,';
  } else {
    //evening
    greeting.textContent = 'Good Evening,';
  }
}

//Run
showTime();
setGreet();
Submit();

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const date = new Date();
const sec = date.getSeconds();
const min = date.getMinutes();
const hr = date.getHours();
var secDegrees = (360 / 60) * sec + 90;
var minDegrees = (360 / 60) * min + 90;
var hrDegrees = (360 / 12) * hr + 90;

function setDate() {
  // Calculate the degree shift
  secDegrees += 6; // 360 deg/ 60s => per sec 6 degree change for second hand
  minDegrees += 0.1; // 360 deg/ 60s/ 60m => per sec 0.1 degree change for min hand
  hrDegrees += 0.0083; // 360 deg/ 60s/ 60m / 12h => per sec 0.0083 degree change for hour hand
  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

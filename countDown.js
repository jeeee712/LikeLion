const dayText = document.getElementById("days");
const hourText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const leftTimeText = document.getElementById("leftTime");

const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const submit = document.getElementById("submit");

let inputDate = new Date();
let currentDate = new Date();
let timer;

submit.addEventListener("click", function () {
  const date = dateInput.value;
  const time = timeInput.value;

  inputDate = new Date(`${date} ${time}`).getTime();

  clearInterval(timer);
  timer = setInterval(updateCountDown, 1000);
});

function updateCountDown() {
  currentDate = new Date().getTime();

  const mSecondsLeft = inputDate - currentDate;

  dayText.innerHTML = zero(Math.floor(mSecondsLeft / (1000 * 60 * 60 * 24)));
  hourText.innerHTML = zero(Math.floor((mSecondsLeft / (1000 * 60 * 60)) % 24));
  minutesText.innerHTML = zero(Math.floor((mSecondsLeft / (1000 * 60)) % 60));
  secondsText.innerHTML = zero(Math.floor((mSecondsLeft / 1000) % 60));
  leftTimeText.innerHTML = `카운트다운 남은 시간은 ${dayText.innerHTML}일 ${hourText.innerHTML}시간 ${minutesText.innerHTML}분 ${secondsText.innerHTML}초 남았습니다.`;
}

const zero = (n) => (n < 10 ? "0" : "") + n;

function setMinValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(zero(now.getMonth() + 1));
  const day = String(zero(now.getDate()));

  return `${year} - ${month} - ${day}`;
}

dateInput.min = setMinValue();

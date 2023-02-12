const day = document.getElementById('day');
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear = new Date().getFullYear();
console.log(currentYear);
const newYear = new Date(`26 Oct ${currentYear} 00:00:00`);

function countdownTimer(){
  const todayDate = Date.now();
  const gap = newYear - todayDate;

  const d = Math.floor(gap / 1000  / 60 / 60 / 24);
  const h = Math.floor((gap / 1000  / 60 / 60) % 24);
  const m = Math.floor((gap / 1000  / 60) % 60);
  const s = Math.floor((gap / 1000)  % 60);

  day.innerHTML = d < 10 ? '0' + d : d;
  hour.innerHTML = h < 10 ? '0' + h : h;
  min.innerHTML = m < 10 ? '0' + m : m;
  sec.innerHTML = s < 10 ? '0' + s : s;
}setInterval(countdownTimer,1000);
countdownTimer();
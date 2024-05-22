const updateSec = () => {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  const secondHand = document.getElementsByClassName("second")[0];
  secondHand.style.rotate = `${second * 6}deg`;

  const minuteHand = document.getElementsByClassName("minute")[0];
  minuteHand.style.rotate = `${minute * 6}deg`;

  const hourHand = document.getElementsByClassName("hour")[0];
  hourHand.style.rotate = `${hour * 30 + minute / 2}deg`;
};

setInterval(updateSec, 1000);

const hourContainer = document.querySelector(".hourNums");
let deg = 0;
for (let i = 0; i < 12; i++) {
  const div = document.createElement("div");
  div.classList.add("hourNum");
  hourContainer.appendChild(div);
  div.style.rotate = `${deg}deg`;
  deg += 30;
}

deg = 0;
for (let i = 0; i < 60; i++) {
  const div = document.createElement("div");
  div.classList.add("hourSec");
  hourContainer.appendChild(div);
  div.style.rotate = `${deg}deg`;
  deg += 6;
}

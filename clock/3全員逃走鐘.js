function rotateClockHands() {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegrees = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteDegrees = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondDegrees = (360 / 60) * seconds;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands();

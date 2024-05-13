// Live date and time

function updateTime(newDate) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[newDate.getDay()];

  let hour = newDate.getHours().toString().padStart(2, "0");
  let minute = newDate.getMinutes().toString().padStart(2, "0");

  return `${day} ${hour}:${minute}`;
}

let currentTimeElement = document.querySelector("#current-time");
let currentTime = new Date();

currentTimeElement.innerHTML = updateTime(currentTime);

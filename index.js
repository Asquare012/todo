// date

const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();
const dow = date.getDay();

// day
document.querySelector("#day").innerHTML = d;

// month
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector("#month").innerHTML = months[m];

// day of the week
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.querySelector(".day").innerHTML = dayOfWeek[dow];

// year
document.querySelector("#year").innerHTML = y;

// todo item
const text = document.querySelector("#text");
const add = document.querySelector("#add");
const itemC = document.querySelector("#items-container");
add.addEventListener("click", () => {
  text.value != ""
    ? (itemC.innerHTML += `
  <div class = "item">
  <div class="plan">${text.value}</div>
  <div class="icon">
  <img src="delete.webp" alt="delete" height="25px" width="25px" class="remove">
  </div>
  </div>`)
    : alert("input a todo");
  text.value = "";

  // const red = document.querySelector(".remove");
  // const item = document.querySelector(".item");
  // red.addEventListener("click", () => {
  //   item.map((list) => {
  //     return list.remove();
  //   });
  // });
});

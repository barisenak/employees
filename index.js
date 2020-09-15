const name = document.querySelector("#name");
const year = document.querySelector("#year");
const addBtn = document.querySelector("#addBtn");
const date = document.querySelector("#date");
const salary = document.querySelector("#salary");
const table = document.querySelector("#table");
const fireBtn = document.querySelector("#fireBtn");
const sumBtn = document.querySelector("#sumBtn");
const upAge = document.querySelector("#upAge");
const downAge = document.querySelector("#downAge");
const upDate = document.querySelector("#upDate");
const downDate = document.querySelector("#downDate");
let number = document.querySelector("#number");
let checkbox = document.querySelector("#check");
let sumOfPeople = 0;
let arr = [];

function makeTable() {
  table.innerHTML = "";
  arr.forEach((item) => {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr id="tableString"><td><input id="check" type="checkbox"/></td><td id="cellName" class="cell">${item.name}</td><td class="cell">${item.year}</td><td id="cellDate" class="cell">${item.date}</td><td class="cell">${item.salary}</td>`
    );
  });
}

function makeFire() {
  const arrCheck = [...document.querySelectorAll("#check")];
  const arrFilter = arrCheck.filter((item) => {
    if (item.checked) {
      return item;
    }
  });
  arrFilter.forEach((item) => {
    const tableString = item.closest("#tableString");
    const cellName = tableString.querySelector("#cellName");
    console.log(cellName.textContent);
    arr.forEach((item, index) => {
      if (item.name === cellName.textContent) {
        tableString.remove();
        arr.splice(index, 1);
      }
    });
  });
}

function getSum() {
  let arrSum = [];
  arr.forEach((item) => {
    arrSum.push(item.salary);
  });
  let sumSalary = arrSum.reduce(function (sum, current) {
    return Number(sum) + Number(current);
  });
  sum.textContent = ` = ${sumSalary}$`;
}

function getTimestamp() {
  arr.forEach((item) => {
    const dateValue = new Date(item.date);
    item.date = dateValue.getTime();
    console.log(arr);
  });
}

function getNormalDate() {
  arr.forEach((item) => {
    const normalDate = new Date(item.date);
    item.date = normalDate.toLocaleDateString("ko-KR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  });
}

function ageUp() {
  arr.sort(function (a, b) {
    return a.year - b.year;
  });
  makeTable();
}

function ageDown() {
  arr.sort(function (a, b) {
    return b.year - a.year;
  });
  makeTable();
}

function dateUp() {
  getTimestamp();
  arr.sort(function (a, b) {
    return a.date - b.date;
  });
  getNormalDate();
  makeTable();
}

function dateDown() {
  getTimestamp();
  arr.sort(function (a, b) {
    return b.date - a.date;
  });
  getNormalDate();
  makeTable();
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  sumOfPeople += 1;
  number.textContent = ` = ${sumOfPeople}`;
  arr.push({
    name: name.value,
    year: year.value,
    date: date.value,
    salary: salary.value,
  });
  makeTable();
});

fireBtn.addEventListener("click", () => {
  makeFire();
});

sumBtn.addEventListener("click", () => {
  getSum();
});

upAge.addEventListener("click", () => {
  ageUp();
});

downAge.addEventListener("click", () => {
  ageDown();
});

upDate.addEventListener("click", () => {
  dateUp();
});

downDate.addEventListener("click", () => {
  dateDown();
});

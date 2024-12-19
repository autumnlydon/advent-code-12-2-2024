const numList = document.querySelector("#list").textContent;
const array = numList.split("  ");
const fixedArray = array.map((el) => el.trim()).filter((el) => el !== "");
console.log(fixedArray);

for (let el of fixedArray)

// Part 2: JavaScript Functions

// Function with parameter & return value
function square(num) {
  return num * num;
}

// Demonstrate scope
let globalMessage = "Global scope variable"; // global

function showSquare(value) {
  let localMessage = "Local scope variable"; // local
  const result = square(value);
  document.getElementById("calcResult").textContent =
    `${localMessage} | ${globalMessage} | Square of ${value} = ${result}`;
}


// Part 3: Combining CSS + JS

const animateBtn = document.getElementById("animateBoxBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  toggleAnimation(jsBox);
});

// Reusable function: toggles animation class
function toggleAnimation(element) {
  element.classList.toggle("animate");
}

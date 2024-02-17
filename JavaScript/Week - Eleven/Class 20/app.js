alert("Hello Students");

// Example switch statement
var day = "Friday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is neither Monday nor Tuesday");
    break;
}

// Example ternary operator
var age = 15;
var message =
  age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(message);

// Example handling events in the DOM
var element = document.getElementById("my-element");
element.addEventListener("click", function () {
  console.log("Element clicked!");
});

element.addEventListener("keydown", function (event) {
  console.log("Key pressed: " + event.key);
});

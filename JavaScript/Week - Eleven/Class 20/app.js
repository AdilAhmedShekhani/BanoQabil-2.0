// alert("Hello Students");

// Example switch statement
// var day = "Friday";
// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   default:
//     console.log("Today is neither Monday nor Tuesday");
//     break;
// }

// Example ternary operator
// var age = 15;
// var message =
//   age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(message);

// Example handling events in the DOM
// var element = document.getElementById("my-element");
// element.addEventListener("click", function () {
//   console.log("Element clicked!");
// });

// element.addEventListener("keydown", function (event) {
//   console.log("Key pressed: " + event.key);
// });

// SetTimeOut (For Delay)

// function abc() {
//   console.log("two");
// }
// console.log("one");
// setTimeout(abc, 5000);
// console.log("three");

// Text Expand (See More / See Less)

// function expandText() {
//   var shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
//   var text =
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed labore tempore quaerat, cupiditate porro molestiae pariatur possimus facere cum cumque, eaque neque veritatis placeat minima nemo hic, sint explicabo!";
//   var para = document.getElementById("para");
//   var link = document.getElementById("link");

//   if (link.innerHTML === "See more") {
//     para.innerHTML = text;
//     link.innerHTML = "See Less";
//   } else {
//     para.innerHTML = shortText;
//     link.innerHTML = "See more";
//   }
// }

// Promise

let promise = new Promise(function (resolve, reject) {
  const x = "adil@banoqabil.com";
  const y = "adil@banoqabil.com";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a Login");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });


  


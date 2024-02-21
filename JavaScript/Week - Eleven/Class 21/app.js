// JSON Formater Extension

//Fetch Method (Get Data from API)

let output = document.getElementById("output");
function fetchData() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML += "id = " + data.id + "<br/>";
      output.innerHTML += "brand = " + data.brand + "<br/>";
      output.innerHTML += "category = " + data.category + "<br/>";
      output.innerHTML += "price = " + data.price + "<br/>";
      output.innerHTML += "rating = " + data.rating + "<br/>";
      output.innerHTML += "stock = " + data.stock + "<br/>";
    });
}

//Closures

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

//Practical Example of Closures
// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }

// const size12 = makeSizer(24);
// const size14 = makeSizer(48);
// const size16 = makeSizer(72);

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

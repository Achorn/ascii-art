console.log("hello");

let four = [
  [" ", " ", " ", "A", "A", " ", " ", " "],
  [" ", " ", "A", " ", " ", "A", " ", " "],
  [" ", "A", "A", "A", "A", "A", "A", " "],
  ["A", " ", " ", " ", " ", " ", " ", "A"],
];

let eight = [
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ],
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ],
  [
    " ",
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
    " ",
    " ",
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
    " ",
  ],
  [
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
  ],
  [
    " ",
    " ",
    " ",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    " ",
    " ",
    " ",
  ],
  [
    " ",
    " ",
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
    " ",
    " ",
  ],
  [
    " ",
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
    " ",
  ],
  [
    "A",
    "A",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "A",
    "A",
  ],
];

// for (let i = 0; i < eight.length; i++) {
//   console.log(eight[i].join(""));
// }

function scaleSpread(array, factor) {
  const scaled = [];

  for (const row of array) {
    let x = [];

    for (const item of row) x.push(...Array(factor).fill(item));

    scaled.push(...Array(factor).fill(x));
  }

  return scaled;
}
let sixteen = scaleSpread(eight, 2);

function arrToString(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i].join("") + "<br>";
  }
  return string;
}

let mono = document.getElementById("mono");
console.log(mono.innerHTML);

mono.innerHTML = arrToString(sixteen);

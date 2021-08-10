let oneA = ["A"];
let twoA = [
  [" ", "A", " "],
  ["A", " ", "A"],
];
let threeA = [
  [" ", " ", "A", " ", " "],
  ["", "A", "A", "A", ""],
  ["A", "", "", "", "A"],
];

let four = [
  [" ", " ", " ", "A"],
  [" ", " ", "A", " "],
  [" ", "A", "A", "A"],
  ["A", " ", " ", " "],
];

let eight = [
  [" ", " ", " ", " ", " ", " ", " ", "A"],
  [" ", " ", " ", " ", " ", " ", "A", "A"],
  [" ", " ", " ", " ", " ", "A", "A", " "],
  [" ", " ", " ", " ", "A", "A", "A", "A"],
  [" ", " ", " ", "A", "A", "A", "A", "A"],
  [" ", " ", "A", "A", " ", " ", " ", " "],
  [" ", "A", "A", " ", " ", " ", " ", " "],
  ["A", "A", " ", " ", " ", " ", " ", " "],
];

function scaleSpread(array, factor) {
  const scaled = [];

  for (const row of array) {
    let x = [];

    for (const item of row) x.push(...Array(factor).fill(item));

    scaled.push(...Array(factor).fill(x));
  }

  return scaled;
}

function arrToString(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i].join("") + "<br>";
  }
  return string;
}

function halfArrToString(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i].join("");
    let rev = arr[i].slice();
    string += rev.reverse().join("");
    string += "<br>";
  }
  return string;
}
function trimA(arr, lWidth) {
  for (i = 0; i < arr.length; i++) {
    let disp = lWidth - (i % lWidth) - 1;
    let newArr = arr[i].slice();
    for (let j = 0; j < disp; j++) {
      newArr.pop();
      newArr.unshift(" ");
    }
    arr[i] = newArr;
  }
}

let monoA = document.getElementById("mono-a");
let monoC = document.getElementById("mono-c");
let scale = 30;
let scaledFour = scaleSpread(four, scale);
trimA(scaledFour, scale);

let scaledEight = scaleSpread(eight, 5);
trimA(scaledEight, 4);
// mono.innerHTML = halfArrToString(scaleSpread(four, 7));
monoA.style.fontSize = `${90 / scale}px`;
// monoC.style.fontSize = `${4 / scale}em`;
monoA.innerHTML = halfArrToString(scaledFour);
// monoC.innerHTML = arrToString(scaledEight);
// mono.innerHTML += arrToString(scaleSpread(eight, 1));

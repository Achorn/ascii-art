let oneA = ["A"];
let oneC = ["C"];
let twoA = [
  [" ", "A", " "],
  ["A", " ", "A"],
];
let twoC = [["C"], ["C"]];

let threeA = [
  [" ", " ", "A", " ", " "],
  [" ", "A", "A", "A", " "],
  ["A", " ", " ", " ", "A"],
];
let threeC = [
  [" ", "C", "C", "C"],
  ["C", " ", " ", " "],
  [" ", "C", "C", "C"],
];

let fourA = [
  [" ", " ", " ", "A"],
  [" ", " ", "A", " "],
  [" ", "A", "A", "A"],
  ["A", " ", " ", " "],
];
let fourC = [
  [" ", "C", "C", "C", " "],
  ["C", " ", " ", " ", " "],
  ["C", " ", " ", " ", " "],
  [" ", "C", "C", "C", " "],
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
//GET ELEMENTS
let monoA = document.getElementById("mono-a");
let monoC = document.getElementById("mono-c");

//SCALE AND RESIZE
let scale = 2;
let scaledFour = scaleSpread(fourA, scale);
trimA(scaledFour, scale);
let scaledEight = scaleSpread(eight, 5);

//ADD TO HTML
// mono.innerHTML = halfArrToString(scaleSpread(four, 7));
monoA.style.fontSize = `${60 / scale}px`;
monoC.style.fontSize = `${60 / scale}px`;

// monoC.style.fontSize = `${4 / scale}em`;
monoA.innerHTML = halfArrToString(scaledFour);
monoC.innerHTML = arrToString(fourC);
// mono.innerHTML += arrToString(scaleSpread(eight, 1));

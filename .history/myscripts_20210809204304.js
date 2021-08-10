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

function halfAToString(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i].join("");
    let rev = arr[i].slice();
    string += rev.reverse().join("");
    string += "<br>";
  }
  return string;
}

function halfCToString(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i].join("");
    string += "<br>";
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    string += arr[i].join("");
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

function trimC(arr, lWidth) {
  console.log("trimming C: ", arr, lWidth);
  for (i = 0; i < lWidth; i++) {
    //add 2*i to center
    let newArr = arr[i].slice();
    console.log(i);
    for (let j = 0; j < i * 2; j++) {
      newArr.splice(newArr.length / 2, 0, "C");
    }
    arr[i] = newArr;

    //remove i from sides
  }
}
//GET ELEMENTS
let monoA = document.getElementById("mono-a");
let monoC = document.getElementById("mono-c");

//SCALE AND RESIZE
//A
let scale = 4;
let scaledFour = scaleSpread(fourA, scale);
trimA(scaledFour, scale);

//C
let scaledC = scaleSpread(fourC, scale);
trimC(scaledC, scale);
//ADD TO HTML
// mono.innerHTML = halfAToString(scaleSpread(four, 7));
monoA.style.fontSize = `${60 / scale}px`;
monoC.style.fontSize = `${60 / scale}px`;

// monoC.style.fontSize = `${4 / scale}em`;
monoA.innerHTML = halfAToString(scaledFour);
monoC.innerHTML = halfCToString(scaledC);
// mono.innerHTML += arrToString(scaleSpread(eight, 1));

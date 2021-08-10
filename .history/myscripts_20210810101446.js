let monoA = document.getElementById("mono-a");
let monoC = document.getElementById("mono-c");
let scaleInput = document.getElementById("scale-input");

let aMinis = {
  one: ["A"],
  two: [
    [" ", "A", " "],
    ["A", " ", "A"],
  ],
  three: [
    [" ", " ", "A", " ", " "],
    [" ", "A", "A", "A", " "],
    ["A", " ", " ", " ", "A"],
  ],
};
let cMinis = {
  one: ["C"],
  two: [["C"], ["C"]],

  three: [
    [" ", "C", "C", "C"],
    ["C", " ", " ", " "],
    [" ", "C", "C", "C"],
  ],
};

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

function scaleConcat(array, factor) {
  let scaled = [];

  for (const row of array) {
    let x = [];

    for (const item of row) x = x.concat(Array(factor).fill(item));

    scaled = scaled.concat(Array(factor).fill(x));
  }

  return scaled;
}
function arrToString(arr) {
  let string = "";
  if (arr.length == 1) {
    string += arr.join("") + "<br>";
    return string;
  }
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
  for (i = 0; i < lWidth; i++) {
    //add 2*i to center
    let newArr = arr[i].slice();
    for (let j = 0; j < i * 2; j++) {
      newArr.splice(newArr.length / 2, 0, "C");
    }

    //remove i from sides
    for (let j = 0; j < i; j++) {
      newArr.pop();
      newArr.shift();
    }
    arr[i] = newArr;
  }
}

function getMinis(height) {
  return height == 1
    ? [aMinis.one, cMinis.one]
    : height == 2
    ? [aMinis.two, cMinis.two]
    : [aMinis.three, cMinis.three];
}

function scaleLetters(height) {
  let scaledA, scaledC;

  if (height < 4) {
    [scaledA, scaledC] = getMinis(height);
    console.log(scaledA, scaledC);
    scaledA = arrToString(scaledA);
    scaledC = arrToString(scaledC);
  }

  //check to see if scale if scale is divisible by 4
  else {
    let padding = height % 4;
    console.log(padding);
    scale = (height - padding) / 4;
    console.log("height: ", height, " padding: ", padding, " scale: ", scale);

    //scale letters
    scaledA = fourA.map((arr) => arr.slice());
    scaledC = fourC.map(function (arr) {
      return arr.slice();
    });
    scaledA = scaleConcat(scaledA, scale);
    trimA(scaledA, scale);
    scaledC = scaleConcat(scaledC, scale);
    trimC(scaledC, scale);

    //add the apropriat padding between the factors of 4 either 0-1

    scaledA = halfAToString(scaledA);
    scaledC = halfCToString(scaledC);
    // return newly scale
    monoA.style.fontSize = `${60 / scale}px`;
    monoC.style.fontSize = `${60 / scale}px`;
  }

  monoA.innerHTML = scaledA;

  monoC.innerHTML = scaledC;
}

function handlePress() {
  let scale = scaleInput.value;
  scaleLetters(scale);
}

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

function halfCToString(arr, padding) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i].join("");
    string += "<br>";
  }
  for (let i = 0; i < padding.length; i++) {
    string += padding[i].join("");
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
function padA(arr, padding, scale) {
  for (let i = 0; i < padding; i++) {
    //if pad is even
    if (i % 2 != 0) {
      arr.forEach((subArr) => {
        subArr.push(subArr[subArr.length - 1]);
      });
      //add top layer with spaces till the end
      let topArr = [];
      for (let i = 0; i < arr[0].length - 1; i++) {
        topArr.push(" ");
      }
      topArr.push("A");
      arr.unshift(topArr);

      //remove thick bottom line in center
      arr[scale][arr[scale].length - 1] = " ";
    } else {
      // if pad is odd
      let newLine = [...arr[arr.length - 1]];
      //add space to end
      newLine.push(" ");
      //add spaces to beginning of each array
      for (let j = 0; j < arr.length; j++) {
        arr[j].unshift(" ");
      }

      // push new bottom to array
      arr.push(newLine);
    }
  }
}
function padJoinC(arr, padding) {
  //vertical height padding
  let pad = [];
  for (let i = 0; i < padding; i++) {
    pad.push(arr[arr.length - 1]);

    for (let i = 0; i < arr.length; i++) {
      arr[i].splice(arr[i].length / 2, 0, arr[i][arr.length / 2]);
    }
  }

  return halfCToString(arr, pad);
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
  let padding = height % 4;
  let scale = (height - padding) / 4;

  if (height < 4) {
    [scaledA, scaledC] = getMinis(height);
    scaledA = arrToString(scaledA);
    scaledC = arrToString(scaledC);
  }

  //check to see if scale is divisible by 4
  else {
    console.log("height: ", height, " padding: ", padding, " scale: ", scale);

    //scale letters
    scaledA = fourA.map((arr) => arr.slice());
    scaledC = fourC.map((arr) => arr.slice());
    scaledA = scaleConcat(scaledA, scale);
    trimA(scaledA, scale);
    scaledC = scaleConcat(scaledC, scale);
    trimC(scaledC, scale);

    //add the aprop padding between the factors of 4 either 0-1
    scaledC = padJoinC(scaledC, padding);
    padA(scaledA, padding, scale);
    scaledA = halfAToString(scaledA);
    // scaledC = arrToString(scaledC);

    // return newly scaled
  }
  monoA.style.fontSize = `${60 / scale}px`;
  monoC.style.fontSize = `${60 / scale}px`;

  monoA.innerHTML = scaledA;
  monoC.innerHTML = scaledC;
}

scaleInput.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

function handlePress() {
  let scale = scaleInput.value;
  scaleLetters(scale);
}

let four = [
  [" ", " ", " ", "A"],
  [" ", " ", "A", " "],
  [" ", "A", "A", "A"],
  ["A", " ", " ", " "],
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

function trimA(arr, lWidth) {
  for (i = 0; i < arr.length; i++) {
    let disp = lWidth - (i % lWidth) - 1;
    console.log(i, disp);
    console.log(arr[i]);
    let newArr = arr[i].slice();
    for (let j = 0; j < disp; j++) {
      newArr[i].pop();
      newAarr[i].unshift(" ");
    }
    arr[i] = newArr;

    //add to beginning
    // arr[i] == arr[i];
  }
}

let mono = document.getElementById("mono");
let scaled = scaleSpread(four, 3);
trimA(scaled, 3);

// mono.innerHTML = arrToString(scaleSpread(four, 3));
mono.innerHTML = arrToString(scaled);
// mono.innerHTML += arrToString(scaleSpread(eight, 1));

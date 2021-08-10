console.log("hello");

let a = [
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

for (let i = 0; i < eight.length; i++) {
  console.log(eight[i].join(""));
}

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

for (let i = 0; i < sixteen.length; i++) {
  console.log(sixteen[i].join(""));
  console.log("\n");
}

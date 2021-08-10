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
    "A','A",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ],
  [" ", " ", " ", " ", " ", " ", "AAAA", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "AA  AA"],
  [" ", " ", " ", " ", "AAAAAAAA"],
  [" ", " ", " ", "AAAAAAAAAA"],
  [" ", " ", "AA", " ", " ", " ", " ", " ", " ", " ", " ", "AA"],
  [" ", "A", "A", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "A", "A"],
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
console.log(eight, 2);

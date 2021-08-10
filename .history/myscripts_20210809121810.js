console.log("hello");

let a = [
  [" ", " ", " ", "A", "A", " ", " ", " "],
  [" ", " ", "A", " ", " ", "A", " ", " "],
  [" ", "A", "A", "A", "A", "A", "A", " "],
  ["A", " ", " ", " ", " ", " ", " ", "A"],
];

console.log(a);

for (let i = 0; i < a.length; i++) {
  console.log(a[i].join(""));
}

let eight = [
  [" ", " ", " ", " ", " ", " ", " ", "AA"],
  [" ", " ", " ", " ", " ", " ", "AAAA"],
  [" ", " ", " ", " ", " ", "AA  AA"],
  [" ", " ", " ", " ", "AAAAAAAA"],
  [" ", " ", " ", "AAAAAAAAAA"],
  [" ", " ", "AA        AA"],
  [" ", "A", "A", "      ", "A", "A"],
  ["A", "A", "A", "A"],
];

for (let i = 0; i < eight.length; i++) {
  console.log(eight[i].join(""));
}

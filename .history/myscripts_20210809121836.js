console.log("hello");

let a = [
  [" ", " ", " ", "A", "A", " ", " ", " "],
  [" ", " ", "A", " ", " ", "A", " ", " "],
  [" ", "A", "A", "A", "A", "A", "A", " "],
  ["A", " ", " ", " ", " ", " ", " ", "A"],
];

let eight = [
  [" ", " ", " ", " ", " ", " ", " ", "AA"],
  [" ", " ", " ", " ", " ", " ", "AAAA"],
  [" ", " ", " ", " ", " ", "AA  AA"],
  [" ", " ", " ", " ", "AAAAAAAA"],
  [" ", " ", " ", "AAAAAAAAAA"],
  [" ", " ", "AA        AA"],
  [" ", "A", "A", "          ", "A", "A"],
  ["A", "A", "            ", "A", "A"],
];

for (let i = 0; i < eight.length; i++) {
  console.log(eight[i].join(""));
}

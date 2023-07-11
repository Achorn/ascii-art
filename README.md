# Take Home Exercise - dinamicaly scaling ASCII art 'AC'

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Live Site URL: [https://achorn.github.io/ascii-art/](https://achorn.github.io/ascii-art/)

### The challenge

Write and host a web application which asks the user for a vertical size, and then prints the letters “AC”, using their respective letters, to fill that height, at a letter line width ratio of 1 wide for every 4 high, with a minimum letter line size of 1.

For instance, if asked to print in size 8:

```
        AA             CCCCCCC
       AAAA           CCCCCCCCC
      AA  AA         CC
     AAAAAAAA        CC
    AAAAAAAAAA       CC
   AA        AA      CC
  AA          AA      CCCCCCCCC
 AA            AA      CCCCCCC
```

For instance, if asked to print in size 3:

```
   A    CCC
  AAA  C
 A   A  CCC
```

Requirements:

- Use any language you are comfortable with. We use Dart for frontend work, so if you’re comfortable with that, use it.
- Don’t use any imports outside of the standard library for functionality. HTTP calls may be handled through a third party if this is part of your implementation.
- Code should be well formatted and documented so it is readable and maintainable.

### Screenshot

Screenshots of different heights

![Finished web design](./images/20.png)
![Finished web design](./images/100.png)
![Finished web design](./images/500.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Web-first workflow
- Javascript

- No use of frameworks like react, as it felt overpowered and bulky for a challenge like this

### What I learned

Mostly learning about ascii art and all the styling that goes into making uniform art with letters.
one of the challenges was stripping the font of all its hidding padding and margins in order to not let 0.2 px of padding create a horrid problem when you start scaling to 4,000x4,000 characters.

the letters A and C are symetrical so you can start with half of the letter, do all the computation on one side, then mirror the other half after scaling and smoothing.

This trim function takes blocky ascii art that was scaled from a character of a height of 4 then smooths out the sides.

```js
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
```

Before Trim
![before trim](./images/before-trim.png)

After Trim

![before trim](./images/after-trim.png)

### Continued development

what I would do if I took more time

- find a better way to scale the font of the ascii art as it grows in size

### Useful resources

- [Easy 2D array scaling](https://stackoverflow.com/questions/49620245/how-to-scale-a-two-dimensional-array-in-javascript-fast) - grabbed a quick 2d array scaler from stack overflow. basically doubled the array vertically and horizontally.

- [Monospacing for HTML Elements](https://www.w3schools.com/tags/tag_tt.asp) - defined the teletype/monospace for the P element contains the ascii art for appropriate spacing.

- [Preserve spacing in HTML](https://stackoverflow.com/questions/18427697/how-to-keep-all-the-spaces-in-a-string) - preserved spacing in HTML by using white-space: pre.

## Author

- Website - [Joshua Achorn](https://achorn.github.io/)
- Twitter - [@achorn91338214](https://twitter.com/achorn91338214)

## Acknowledgments

No acknoledgements for this exercise

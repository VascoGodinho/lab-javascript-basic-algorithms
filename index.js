// Iteration 1: Names and Input
const hacker1 = "Vasco";
const hacker2 = "Paulo";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  
// Iteration 3: Loops
let nameBig = "";

for (let i = 0; i < hacker1.length; i++) {
  nameBig += hacker1[i].toUpperCase() + " ";
}
console.log(nameBig);

let nameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  nameReverse += hacker2[i];
}
console.log(nameReverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, nunc molestie vulputate eleifend, neque velit posuere lacus, id tristique quam augue eget ante. Nulla sed arcu et dui dapibus vestibulum in sed sapien. Integer orci dui, sodales vitae consequat sit amet, tincidunt nec magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac dapibus nulla. Nulla ante lacus, dictum non sollicitudin in, fringilla quis tellus. Vivamus metus velit, consectetur eget efficitur vel, aliquet ac arcu. Etiam tristique dui sed scelerisque pharetra. Quisque at faucibus justo. 

Nulla mattis dictum tempor. Ut eleifend imperdiet pretium. Cras egestas congue neque, eget vestibulum ex viverra et. Nullam porta metus in mollis elementum. Sed sagittis malesuada velit, ac tempor leo volutpat a. Duis scelerisque mollis quam vel aliquet. Suspendisse fringilla varius nisi vitae suscipit. In id mauris viverra, aliquam est nec, sagittis lacus. Donec condimentum vel ante id sagittis. Nullam eu nisi porttitor, sollicitudin est sed, interdum tellus. Vivamus diam lorem, malesuada nec consectetur sed, lobortis id sapien. Vivamus egestas aliquam purus maximus vulputate. Sed consequat, felis sit amet vestibulum faucibus, mi eros imperdiet purus, sit amet tristique ligula felis a lectus. 

Proin laoreet justo purus. Nam sit amet venenatis ipsum. Suspendisse sed lectus sit amet leo ultrices gravida vel in massa. Vivamus ac mauris ac est venenatis iaculis id nec purus. Nulla vulputate diam neque, eget tincidunt lacus varius sit amet. Morbi fermentum tempus blandit. Phasellus lacinia neque ut blandit scelerisque. Proin vel quam tempor, pulvinar risus sit amet, scelerisque libero. Integer laoreet quam in ultricies aliquet. Maecenas ac vehicula arcu. Morbi sed ligula ut erat convallis luctus. `;

let wordCount = 1;
let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }

  
  
  if (longText[i] === "e" && longText[i+1] === "t") {
    etCount++;
  }
}

console.log(wordCount);
console.log(etCount);


// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
let phraseToCheckReversed = "";
let phraseLowerCase = phraseToCheck.toLowerCase();
let phraseNoPontuation = phraseLowerCase.replace(/[, ?!.:]/g, "");

for (i = phraseNoPontuation.length - 1; i >= 0; i--) {
  phraseToCheckReversed += phraseNoPontuation[i];
}

if (phraseNoPontuation === phraseToCheckReversed) {
  console.log("It's a palindrome");
}
else {
  console.log("It's not a palindrome");
}

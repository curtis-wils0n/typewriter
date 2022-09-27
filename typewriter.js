const sentence = "hello there from lighthouse labs!";
const typeSpeed = 100;

let increment = 0;
for (const char in sentence) {    
  setTimeout(() => {
    char < sentence.length - 1 ? process.stdout.write(sentence[char]) : process.stdout.write(sentence[char] + "\n");
  }, increment);
  increment += typeSpeed;
}
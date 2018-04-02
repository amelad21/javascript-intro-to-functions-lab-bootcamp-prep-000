function whisper(String) {
  return String.toLowerCase()
}
function shout(string) {
  return string.toUpperCase()
}
function logShout(string) {
console.log(string.toUpperCase())
}
function logWhisper(String) {
  console.log(String.toLowerCase())
}

var uppercase = "YES INDEED!"
uppercase.toUpperCase('yes indeed') === uppercase

var lowercase = "I can't hear you!"
lowercase.toLowerCase(" I can't hear you!")

var mixedCase = 'I love you,Grandma!'
mixedCase.toLowerCase('I love you,Grandma') === mixedCase
 
mixedCase.toUpperCase('I love you,Grandma') === mixedCase 

function sayHiToGrandma(string) {
 +  if (string.toLowerCase() === string) {
 +    return "I can't hear you!"
 +  }
 +
 +  if (string.toUpperCase() === string) {
 +    return "YES INDEED!"
 +  }
 +
 +  if (string === "I love you, Grandma.") {
 +    return "I love you, too."
 +  }
 +
 +  return "Are you eating enough?"
 +}
